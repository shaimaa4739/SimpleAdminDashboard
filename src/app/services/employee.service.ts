import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  setAllEmployees: any[]=[]
  allEmployees(employees: any[]){
    this.setAllEmployees = employees
    console.log("set emps in service",this.setAllEmployees)
  }
  getAllEmployees()
  {
    console.log("get emps in service",this.setAllEmployees)
    return this.setAllEmployees;
  }
}
