import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cars } from './data/cars';
import { CarsService } from './cars.service';
import { CarDataService } from './shared/car-data-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {
  cars: Cars[] = [];
  carId: number = 0;

  isCarView: boolean = false; 
  isCarUpdate: boolean = false; 
  isCarDelete: boolean = false; 
  
  carUpdateSubscription: Subscription = new Subscription();
  carDeleteSubscription: Subscription = new Subscription();

  constructor(private carsService: CarsService,private carDataService: CarDataService) {} 

  ngOnInit() {
    this.loadData();
    //update table data without refreshing the page
    this.carUpdateSubscription = this.carDataService.getUpdatedCar().subscribe(updatedCar => {
      const index = this.cars.findIndex(c => c.id === updatedCar.id);
      if (index !== -1) {
        this.cars[index] = updatedCar;
      }
      this.carUpdateSubscription.unsubscribe();
    });
    //delete table data without refreshing the page
    this.carDeleteSubscription = this.carDataService.onDeleteSuccess().subscribe(deletedCarId => {
      this.cars = this.cars.filter(car => car.id !== deletedCarId);
    });
  }

  ngOnDestroy(): void {
    this.carUpdateSubscription.unsubscribe();
    this.carDeleteSubscription.unsubscribe();
  }

  loadData() {
    this.carsService.getData().subscribe(
      (data: Cars[]) => {
        this.cars = data;
        console.log(this.cars);
      }
    );
  }

  showCarDetails(carId: number) {
    this.carId = carId;
    console.log(this.carId);
    this.isCarView = true;
  }

  closeDialog() {
    this.isCarView = false;
  }

  updateCar(carId: number) {
    this.carId = carId;
    this.isCarUpdate = true;
  }

  closeUpdateDialog(){
    this.isCarUpdate = false;
  }

  deleteCar(carId: number) {
    this.carId = carId;
    this.isCarDelete= true;
  }

  closeDeleteDialog(){
    this.isCarDelete = false;
  }

}
