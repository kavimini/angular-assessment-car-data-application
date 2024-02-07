import { Component, OnInit } from '@angular/core';
import { Cars } from './data/cars';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Cars[] = [];
  carId: number | null = null;

  isCarView: boolean = false; 
  isCarUpdate: boolean = false; 
  isCarDelete: boolean = false; 
  
  constructor(private carsService: CarsService) {} 

  ngOnInit() {
    this.loadData();
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
