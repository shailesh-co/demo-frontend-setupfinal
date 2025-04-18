import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {
    path:'user',loadChildren:()=>import('./user-dashboard/user-dashboard.module').then((m)=>m.UserDashboardModule)
  },
  {
    path:'admin', loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then((m)=>m.AdminDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
