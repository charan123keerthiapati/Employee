import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empList:any=[];

  constructor(private employeedata:RegistrationService,private router:Router) { }

  ngOnInit() {
    this.employeedata.getEmployeeslist().subscribe(res=>
      this.empList=res )
  }
  back(){
    this.router.navigate(["admin"]);
  }
  delete(emp){
    this.empList.splice(emp-1,1)
    this.employeedata.deleteEmployee(emp).subscribe(res=>
      console.log("success"))
  }
  }
