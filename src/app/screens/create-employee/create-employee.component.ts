import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employees: any[] = [];
  constructor(private allEmployeesData: EmployeeService) {
    this.allEmployeesData.allEmployees(this.employees)
    
  }

  ngOnInit(): void {
  }

  // Create New Employee
  createEmployee(data: NgForm){
    Object.defineProperty(data,"gender",{
      value:this.genderStatus
    })
    this.employees.push(data)
    console.log(this.allEmployeesData.allEmployees(this.employees));
    console.log("data in form",data)
    console.log("all emps in create",this.employees)

  }

  // Gender Functions
  genderStatus: String=""
  fGender(el: HTMLElement,elSelected: HTMLElement){
    elSelected.style.left='0'
    this.genderStatus = el.innerText
    // console.log(this.genderStatus);
  }
  mGender(el: HTMLElement,elSelected: HTMLElement){
    elSelected.style.left='110px'
    this.genderStatus = el.innerText
    // console.log(this.genderStatus);
  }

}
