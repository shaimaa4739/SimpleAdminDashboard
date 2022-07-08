import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: any[]=[]
  constructor(public allEmployeesData: EmployeeService) {
    this.employees=allEmployeesData.getAllEmployees()
    console.log(this.employees);
  }

  totalNumberOfEmployees: number=0;
  totalActiveEmployees: number=0;
  totalMaleEmployees: number=0;
  totalFemaleEmployees: number=0;
  ngOnInit(): void {
    this.totalNumberOfEmployees = this.employees.length;
    for(let i=0 ; i<this.employees.length ; i++)
    {
      if(this.employees[i].Status=="active")
        this.totalActiveEmployees++

      if(this.employees[i].gender=="Female")
        this.totalFemaleEmployees++
      else
        this.totalMaleEmployees++
    }
    console.log(this.totalActiveEmployees);
    console.log(this.totalFemaleEmployees);
    console.log(this.totalMaleEmployees);
  }

}
