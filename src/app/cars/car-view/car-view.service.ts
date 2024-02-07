import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from '../data/cars';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CarViewService {
  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) {}

  //GET method with Id 
  getCarDetails(carId: any): Observable<Cars> {
    const apiUrl = `${this.apiUrl}/${carId}`;
    return this.http.get<Cars>(apiUrl);
  }
}
