import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  register=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl('')
  })
  constructor(public router:Router,private registrationService:RegistrationService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Registration Successfull")
    // console.warn(this.addUser.value)
    this.registrationService.sendData(this.register.value).subscribe((data)=>{
      console.log("success",data)
      alert("Registration succesful")
    })
  }
}
