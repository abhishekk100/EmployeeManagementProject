import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl="http://localhost:8080/api/v1/getempl";
  private baseUrl2="http://localhost:8080/admin/";
  
  constructor(private http:HttpClient) { } 

  // in return we are getting employee array from baseUrl
  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
  //takes an employee obj and send to spring as post method:- its used send data/obj 
  addemployee(employee:Employee):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);
  }

  // to get a employee details by id
  getEmployeeById(id:number):Observable<Employee>{
    
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object>
  {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addAdmin(admin:Admin):Observable<Object>{
return this.http.post(`${this.baseUrl2}save`,admin);
  }

  getAdminById(id:number):Observable<Admin>{
    
    return this.http.get<Admin>(`${this.baseUrl2}${id}`);
  }

  
  getAdminList(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseUrl2}getAll`);
  }
}
