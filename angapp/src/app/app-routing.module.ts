import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'HOME',component:HomeComponent},
    {path:'ADDEMPLOYEE',component:AddempComponent},
    {path:'LOGIN',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }