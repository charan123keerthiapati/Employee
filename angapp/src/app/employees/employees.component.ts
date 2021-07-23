import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  empList={};

  constructor(private employeedata:RegistrationService) { }

  ngOnInit() {
    this.employeedata.getEmployeeslist().subscribe(res=>
      this.empList=res )
  }
  }
