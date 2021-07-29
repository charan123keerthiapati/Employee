import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editEmp=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl('')
  })

  constructor(private router:Router,private route:ActivatedRoute,private registrationService:RegistrationService) { }

  ngOnInit() {
    console.warn(this.route.snapshot.params.id)
    this.registrationService.getEmployee(this.route.snapshot.params.id).subscribe((result)=>{
      this.editEmp=new FormGroup({
        fname:new FormControl(result['fname']),
        lname:new FormControl(result['lname']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
        phone:new FormControl(result['phone']),
        address:new FormControl(result['address'])
      })
    })
  }
  back(){
    this.router.navigate(['employees']);
  }
  updateData(){
    this.registrationService.updateEmployee(this.route.snapshot.params.id,this.editEmp.value).
    subscribe((result)=>{
    alert("updated successfully")
    this.router.navigate(['employees'])
    })
  }
 
}
