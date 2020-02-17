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

  ngOnInit(){
    this.employeeData=this.empService.getEmpData();
    this.todayDate=this.empService.getTodaydate();
    this.greet=this.empService.greetMessage;
    console.log(this.greet)

    console.log("emp data :" +JSON.stringify(this.employeeData));

    console.log(this.userSer.msg)
  
  }

  editEmployee(data){
    console.log(data);
    this.empService.editEmployeeData(data);


  }
}
