import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { CreateEmployeeComponent } from './screens/create-employee/create-employee.component';
import { ShowEmployeesComponent } from './screens/show-employees/show-employees.component';

const routes: Routes = [
  {
    component:DashboardComponent,
    path:"Home"
  },
  {
    component:CreateEmployeeComponent,
    path:"CreateEmployee"
  },
  {
    component:ShowEmployeesComponent,
    path:"ShowEmployees"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
