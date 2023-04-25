import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';

import { DoctorComponent } from './pages/Doctor/doctor.component';
import { PatientComponent } from './pages/Patient/patient.component';
import { UsersComponent } from './pages/User/users.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PrescriptionsComponent } from './pages/prescriptions/prescriptions.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'reports',component:ReportsComponent},

  {path:'dashboard',component:DoctorComponent},
  {path:'patient',component:PatientComponent},
  {path:'user',component:UsersComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'prescriptions',component:PrescriptionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
