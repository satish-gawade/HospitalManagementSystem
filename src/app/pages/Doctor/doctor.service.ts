import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl = 'https://localhost:7166/api/Doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl);
  }
  createDoctor(doctor: Doctor): Observable<Doctor> {
  return this.http.post<Doctor>(this.baseUrl, doctor);
}

  
  
}
