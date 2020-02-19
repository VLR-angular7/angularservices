import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service'
import {UserService} from './user.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularServices';
  constructor(private empService:EmployeeService,private userSer:UserService){
    
  }
  employeeData=[];
  todayDate:Date
  greet:string;
  allPosts:any;
  newPost:string;
  errMsg:string

  ngOnInit(){
    this.employeeData=this.empService.getEmpData();
    this.todayDate=this.empService.getTodaydate();
    this.greet=this.empService.greetMessage;
    console.log(this.greet)

    console.log("emp data :" +JSON.stringify(this.employeeData));

    console.log(this.userSer.msg)
    this.empService.getAllPosts().subscribe(postsData=>{
      this.allPosts=postsData;
      console.log(this.allPosts);
    },error=>{
      // alert("Unexpected error occured");
      this.errMsg="Unexpected Error"
    })
  
  }

  editEmployee(data){
    console.log(data);
    this.empService.editEmployeeData(data);


  }


  savePost(){
// console.log(this.newPost);
this.empService.savePost(this.newPost).subscribe(res=>{
  this.allPosts.push(res);
  // console.log(res);
})
  }

  updatePost(post){
    console.log(post);
    this.empService.updatePost(post).subscribe(res=>{
      console.log(res);
    })
  }

  deletePost(post){
    this.empService.deletePost(post).subscribe(res=>{
      let index=this.allPosts.indexOf(post)
       this.allPosts.splice(index,1)
      console.log(res);
    },(error:Response)=>{
      if(error.status==404){
        this.errMsg="Post has been deleted "
      };
    })
  }
}
