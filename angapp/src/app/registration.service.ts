import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RegistrationService {

  url="http://localhost:3000/employees";
  constructor(private _http:HttpClient) { }
  enroll(user:User){
    return this._http.post(this.url,user);
  }
}
