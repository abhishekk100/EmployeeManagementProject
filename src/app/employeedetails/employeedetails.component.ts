import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit{

  id:number=0;
  employee:Employee = new Employee();
  //ActivatedRoute is use to get parameters from url path
  constructor(private route:ActivatedRoute, private service: EmployeesService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //to get id from url path
    this.employee = new Employee();
    this.service.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },
    error => console.log(error));

    
  }
 
}
