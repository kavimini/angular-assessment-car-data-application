import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cars } from '../data/cars';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  private updatedCarSubject = new Subject<Cars>();
  private deleteSuccessSubject = new Subject<number>();

  updateCar(car: Cars): void {
    this.updatedCarSubject.next(car);
  }

  getUpdatedCar(): Observable<Cars> {
    return this.updatedCarSubject.asObservable(); //updated car data only if the form has been submitted
  }

  emitDeleteSuccess(id: any): void {
    this.deleteSuccessSubject.next(id); 
  }

  onDeleteSuccess(): Observable<number> {
    return this.deleteSuccessSubject.asObservable(); 
  }
}
