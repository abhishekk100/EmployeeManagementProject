import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  // open Employee class
  employees: Employee[] = [];
  //open employee service file
  constructor(private service: EmployeesService, private router: Router, private appCom:AppComponent) {
      this.getEmployee();
    
  }
  
  ngOnInit(): void {
    //   this.employees=[{
    //     'id':1,
    //     'fname':"ram",
    //     'lname':"singh",
    //     'email':"ram@"
    
    //   },
    // ]
  }

  private getEmployee() {
    //subscribe is  asynchronus call to rest API means it will not wait for to response and not stops further execution of code it will give you respective response and in mean time code will run without any interruption

    // unlike java is synchronous means it execute code line by line and not stops until it gets error or exception
    this.service.getEmployeeList().subscribe((data: Employee[]) => {
      // console.log(data);
      this.employees = data;
      // console.log(this.employees);
    });
    //return emp array list will get in data and it then assign to this.employees
  }
  updateEmployee(id: number) {
    this.router.navigate(['updateemployees', id]);
  }
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployee();
    });
  }

  employeeDetails(id:number){
    this.router.navigate(['detailsemployees', id]);

  }
}
