import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {HttpClientModule } from '@angular/common/http';
import { CarViewComponent } from './cars/car-view/car-view.component';
import { CarUpdateComponent } from './cars/car-update/car-update.component';
import { FormsModule } from '@angular/forms';
import { CarDeleteComponent } from './cars/car-delete/car-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarViewComponent,
    CarUpdateComponent,
    CarDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
