import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private allEmployeesData: EmployeeService) {
  }

  ngOnInit(): void {
    console.log(this.allEmployeesData.getAllEmployees())
  }

}
