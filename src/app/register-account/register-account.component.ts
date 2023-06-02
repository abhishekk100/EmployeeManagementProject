import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
constructor(private route:Router,private service:EmployeesService){

}
  ngOnInit(): void {
    
  }
  admin:Admin = new Admin();

onSubmite(form:NgForm){
  
  if (form.valid) {
    // TODO: Implement login logic
this.admin=form.value;
   
this.service.addAdmin(this.admin).subscribe(data =>{
alert(JSON.stringify(data));
},
error => console.error(error));
// alert("Account Successfully Created"+"\n"+this.admin.email+"\n"+this.admin.password+"\n"+this.admin.password);

    this.route.navigate(['home']);


  }
}
}
