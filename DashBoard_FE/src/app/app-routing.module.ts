import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuardService } from 'src/Services/auth-guard.service';
import { DashBarComponent } from 'src/dash-bar/dash-bar.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},// default path  
  { path: 'Admin-access', component: DashBarComponent, canActivate: [AuthGuardService] },
  {path:'Dash',component:DashBarComponent},
  {path:'home',component:AdminloginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
