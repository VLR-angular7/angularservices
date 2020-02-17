import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

// @Injectable()

export class EmployeeService {

  constructor() { }

  greetMessage="HELLO";

  getEmpData(){
    return [
      {name:"Ravi",id:12,age:25},
      {name:"Venkat",id:13,age:23},
      {name:"Swapna",id:14,age:27},
      {name:"Udhay",id:15,age:29}
    ]
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
