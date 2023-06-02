import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  // open Employee class
employees:Employee = new Employee();
  //open employee service file and approuting module 
constructor(private service: EmployeesService,private router: ActivatedRoute,private route:Router){}

  id:number=0;

ngOnInit(): void{

  this.id = this.router.snapshot.params['id'];

  this.service.getEmployeeById(this.id).subscribe(data => {
    this.employees = data;
  },
  error=> console.error(error)
  );

}

//1 step
onSubmit(){

  this.service.updateEmployee(this.id,this.employees).subscribe(data => {
    this.gotoEmployeeList();
  },
  error=> console.error(error));
}

gotoEmployeeList(){
  //it will navigate user to the which we have mentioned in navigate method 
  this.route.navigate(['/employees']);
}

}
