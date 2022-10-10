import { MaterialModule } from './../shared/ng-material/material.module';
import { NavigationComponent } from './navigation/navigation.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
