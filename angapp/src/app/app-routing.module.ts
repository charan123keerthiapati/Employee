import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'ADDEMPLOYEE',component:AddempComponent},
    {path:'LOGIN',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }