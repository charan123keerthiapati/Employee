import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RegistrationService {

  url="http://localhost:3000/employees";
  
  constructor(private httpClient:HttpClient) { }
  getEmployeeslist()
  {
    //console.warn("some data");
    return this.httpClient.get(this.url);
  }
  sendData(data)
  {
    //console.warn("service",data)
    return this.httpClient.post(this.url,data)
  }
  loginUser(){
    return this.httpClient.get(this.url)
  }
  deleteEmployee(id){
    return this.httpClient.delete(`${this.url}/${id}`)
  }
  getEmployee(id){
    return this.httpClient.get(`${this.url}/${id}`)
  }
  updateEmployee(id,data){
    return this.httpClient.put(`${this.url}/${id}`,data)
  }
}
