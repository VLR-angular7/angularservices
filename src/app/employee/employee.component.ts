import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService) { }
  employeeData=[];
  ngOnInit() {
    this.employeeData=this.empService.getEmpData();
  }

}
