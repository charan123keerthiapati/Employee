import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

 userModel=new User('charan','keerthipati','charan123keerthipati@gmail.com','Charan',8886475512);
  constructor(private registrationService:RegistrationService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.registrationService.enroll(this.userModel)
    .subscribe(
      data=> console.log('success!',data),
      error=>console.error('Error!',error)
      
    )
  }
}
