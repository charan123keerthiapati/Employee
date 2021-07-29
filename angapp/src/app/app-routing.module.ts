import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    {path:'HOME',component:HomeComponent},
    {path:'ADDEMPLOYEE',component:AddempComponent},
    {path:'LOGIN',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'user',component:UserComponent},
    {path:'update/:id',component:UpdateComponent}
  ];
    



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }