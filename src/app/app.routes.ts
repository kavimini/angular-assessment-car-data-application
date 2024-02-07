import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' }, 
  { path: 'data', component: CarsComponent },
  ];
