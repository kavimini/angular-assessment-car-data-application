import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cars } from '../data/cars';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CarUpdateService {
  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) {}

  updateCarDetails(carDetails: Cars): Observable<Cars> {
    const apiUrl = `${this.apiUrl}/${carDetails.id}`; 

    const updatedCarDetails: Partial<Cars> = {
      manufacturer: carDetails.manufacturer,
      model: carDetails.model,
      year: carDetails.year,
      color: carDetails.color,
      registration_number: carDetails.registration_number
    };

    return this.http.put<Cars>(apiUrl, updatedCarDetails);
  }

}
