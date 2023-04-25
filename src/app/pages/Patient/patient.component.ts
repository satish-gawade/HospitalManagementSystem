import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public users: Patient[] = [];
  public searchTerm: string = '';
  public showAddPatient = false;
  public newPatient: any = {};
  public showEditPatient = false;
  public updatedPatient: Patient = {} as Patient;
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.searchTerm = '';
    this.getPatients();
  }
  toggleAddPatientModal(): void {
    this.showAddPatient = !this.showAddPatient;
    if (!this.showAddPatient) {
      
      this.newPatient = {};
    }
  }
  addPatient(): void {
    // Add validation here if necessary
    this.patientService.addPatient(this.newPatient).subscribe(user => {
      this.users.push(user);
      setTimeout(() => {
        this.toggleAddPatientModal();
      }, 0);
      this.newPatient = {} as Patient;
    });
  }
  
  
  onSubmit(): void {
    this.getPatients();
   
  }
  onClear(): void {
    this.searchTerm = '';
    this.getPatients();
  }
  

  getPatients(): void {
    this.patientService.getPatients().subscribe(users => {
      this.users = users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }
  toggleEditPatientModal(): void {
    this.showEditPatient = !this.showEditPatient;
    if (!this.showEditPatient) {
      this.updatedPatient = {} as Patient;
    }
  }

  editPatient(patient: Patient): void {
    this.updatedPatient = { ...patient };
    this.toggleEditPatientModal();
  }
  updatePatient(): void {
    this.patientService.updatePatient(this.updatedPatient).subscribe(() => {
      this.getPatients();
      this.toggleEditPatientModal();
    });
  }
  deletePatient(patient: Patient): void {
    if (confirm(`Are you sure you want to delete ${patient.name}?`)) {
      if (!patient.id) {
        console.error('Cannot delete patient with undefined ID');
        return;
      }
      this.patientService.deletePatient(patient.id).subscribe(() => {
        this.users = this.users.filter(u => u !== patient);
      });
    }
  }
  
  

}
