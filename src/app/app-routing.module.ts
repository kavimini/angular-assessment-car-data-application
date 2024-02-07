import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' }, 
  { path: 'data', component: CarsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
