import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
    // open Employee class
  employees:Employee = new Employee();
    //open employee service file and approuting module 
  constructor(private service: EmployeesService,private router: Router){}
  
  ngOnInit(): void{

  }
  addEmployee(){
    this.service.addemployee(this.employees).subscribe(data =>{
      console.log(data);
    },
    error => console.error(error));
    //takes to home page
    this.gotoEmployeeList();
  }
  gotoEmployeeList(){
    //it will navigate user to the which we have mentioned in navigate method 
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    // console.log(this.employees);
    //calling add method open service file
    this.addEmployee();
  }
  
  


}
