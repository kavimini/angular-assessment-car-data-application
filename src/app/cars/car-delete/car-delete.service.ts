import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CarDeleteService {
  private apiUrl = `${environment.apiUrl}/cars`;

  constructor(private http: HttpClient) {}

  deleteData(carId: any): Observable<any> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete(url);
  }

}
