import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDataComponent } from './admin-data/admin-data.component';


@NgModule({
  declarations: [
    AdminDataComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
