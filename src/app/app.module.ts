import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';

import { DoctorComponent } from './pages/Doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http'; // 
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './pages/Patient/patient.component';
import { UsersComponent } from './pages/User/users.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PrescriptionsComponent } from './pages/prescriptions/prescriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    DoctorComponent,
    PatientComponent,
    UsersComponent,
    AppointmentComponent,
    PrescriptionsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
