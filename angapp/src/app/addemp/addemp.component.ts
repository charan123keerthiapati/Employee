import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  register={
    fname:'',
    lname:'',
    email:'',
    password:'',
    phone:'',
    address:''
  }
  constructor(public router:Router,private registrationService:RegistrationService) { }

  ngOnInit() {
  }
  onSubmit(user){
    console.log("Registration Successfull")
    // console.warn(this.addUser.value)
    this.registrationService.sendData(user).subscribe((data)=>{
      console.log("success",data)
      alert("Registration succesful")
    })
  }
}
