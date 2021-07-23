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
  a=this.loginUser();
  loginUsers(){
    return this.a;
  }
}
