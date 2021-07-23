import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.removeItem("name");
    alert("logged OUT Succesfully")
    this.router.navigate(["LOGIN"]);
  }
  employees(){
    this.router.navigate(["employees"]);
  }

}
