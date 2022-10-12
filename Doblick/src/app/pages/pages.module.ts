import { GridComponent } from './../shared/components/grid/grid.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/ng-material/material.module';
import { NavigationComponent } from './navigation/navigation.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { EstoqueComponent } from './estoque/estoque.component';
import { DataTablesModule } from "angular-datatables";



@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
    EstoqueComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgApexchartsModule,
    DataTablesModule
  ]
})
export class PagesModule { }
