import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data={}
  constructor(public router:Router) { }

  ngOnInit() {

  }
  checkUser(loginUser){
    let email=loginUser.email;
    let password=loginUser.password;
    if(email=="charan@gmail.com" && password=="123")
    {
      alert("welcome")
      console.log(email)
      sessionStorage.setItem("name",email);
      this.router.navigate(['user'])
    }
    else if(email=="admin123" && password=="admin123")
    {
      console.log("Login Successfull")
      console.log(email)
      sessionStorage.setItem("name",email);
      this.router.navigate(['admin'])
    }   
  }

}
