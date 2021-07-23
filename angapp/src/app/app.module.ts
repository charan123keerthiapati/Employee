import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './services/registration.service';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
