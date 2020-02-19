import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

// @Injectable()

export class EmployeeService {

  constructor(private http:HttpClient) { }

  greetMessage="HELLO";

  getEmpData(){
    return [
      {name:"Ravi",id:12,age:25},
      {name:"Venkat",id:13,age:23},
      {name:"Swapna",id:14,age:27},
      {name:"Udhay",id:15,age:29}
    ]
  }


  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  savePost(post){

console.log("service :"+post);
let data={title:post};
return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
  }

  updatePost(data){
    console.log(data.id);
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+data.id,data);

  }

  deletePost(data){
    console.log(data.id);
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/356');
  }

  getTodaydate(){
    let todayDate= new Date();
    console.log(todayDate);
    return todayDate;
  }

  editEmployeeData(greet){
console.log(greet)

  }

  // greet(){
  //   return "HEY HOW R U ?"
  // }


}
