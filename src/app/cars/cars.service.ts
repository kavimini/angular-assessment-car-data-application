import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cars } from './data/cars';
import { environment } from 'src/environments/environment.local';
//import { CAR_DATA } from './data/car_data';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) {}

  //GET method
  getData(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl);

    //mock data for FE testing
    //return of(CAR_DATA);
  }
}
