import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataComponent } from './admin-data/admin-data.component';

const routes: Routes = [
  {path:'', component:AdminDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
