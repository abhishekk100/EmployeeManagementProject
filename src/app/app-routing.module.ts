import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
{path: 'employees', component: EmployeelistComponent},
{path: 'addemployees', component: AddemployeeComponent},
{path: 'updateemployees/:id', component: UpdateemployeeComponent},
{path: 'detailsemployees/:id', component: EmployeedetailsComponent},
{path: 'home', component: HomeComponent},
{path: 'About', component: AboutComponent},
{path: 'register', component: RegisterAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
