import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  newDoctor: Doctor = {
    name: '',
    gender: '',
    dateOfBirth: null,
    phoneNumber: null,
    address: '',
    specialization: '',
    fees: null
  };
  createDoctorSuccessMessage: string = '';
  createDoctorErrorMessage: string = '';
  @Input() isCreatingDoctor: boolean = false;


  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  onSubmit() {
    this.doctorService.createDoctor(this.newDoctor).subscribe(newDoctor => {
      this.doctors.push(newDoctor);
      this.newDoctor = {
        name: '',
        gender: '',
        dateOfBirth: null,
        phoneNumber: null,
        address: '',
        specialization: '',
        fees: null
      };
    });
  }

}