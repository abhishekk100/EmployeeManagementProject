import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { Admin } from '../admin';
import { AppComponent } from '../app.component';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor( private route:Router, private status:AppComponent,private service:EmployeesService, public appCom:AppComponent){

  }
  ngOnInit(): void {
    
  }
 adminObj:Admin=new Admin();
admin:Admin[]=[];
  onSubmit(form: NgForm) {
    if (form.valid) {
      // TODO: Implement login logic
      this.adminObj=form.value;
this.service.getAdminList().subscribe(data =>{
  this.admin=data;
 let counter=0;
  for(let i=0;i<this.admin.length;i++)
  {
    // console.log(this.adminObj);console.log(this.admin[i]);
    if(this.admin[i].username==this.adminObj.username&&this.admin[i].password==this.adminObj.password&&this.admin[i].email==this.adminObj.email)
    {
      window.alert("Login Successful")
      this.appCom.isLoginSuccess=1;
      this.route.navigate(['employees']);
      counter++;
      break;
    }
   
    
    
  }
  if(counter==0)
  window.alert("Login Unsuccessful")
  this.adminObj.username="";
  this.adminObj.password="";
  this.adminObj.email="";
},
error => console.log(error)) 
// console.log(this.adminObj);
      // this.status.isLoginSuccess
  // this.onCreateAccount();
    }
  }  

  onCreateAccount() {
    // TODO: Navigate to the create register account page
    this.route.navigate(['register']);
  }
  clearAll(){
    this.adminObj.username="";
    this.adminObj.email="";
    this.adminObj.password="";
  }
}
