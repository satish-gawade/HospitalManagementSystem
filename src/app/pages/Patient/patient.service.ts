import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7073/api/Patients'; 

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
  addPatient(patient: any): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }
  updatePatient(patient: Patient): Observable<Patient> {
    const url = `${this.apiUrl}/${patient.id}`;
    return this.http.put<Patient>(url, patient);
  }
  deletePatient(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  // updatePatientIds(): Observable<Patient[]> {
  //   return this.http.get<Patient[]>(this.apiUrl)
  //     .pipe(
  //       switchMap((patients: any[]) => {
  //         // Sort the patients by ID in ascending order
  //         patients.sort((a, b) => a.id - b.id);

  //         // Update the IDs of the patients sequentially starting from 1
  //         patients.forEach((patient, index) => {
  //           patient.id = index + 1;
  //         });

  //         // Update the patients in the API
  //         return this.http.put<Patient[]>(this.apiUrl, patients);
  //       })
  
}

