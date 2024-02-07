import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Cars } from '../data/cars';
import { CarUpdateService } from './car-update.service';
import { CarViewService } from '../car-view/car-view.service';

@Component({
  selector: 'car-update',
  templateUrl: './car-update.component.html'
})
export class CarUpdateComponent implements OnChanges, OnInit {
  @Input() carId: number | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  carDetails: Cars | any;
  initialized: boolean = false;
  updatedCar: Cars | any;

  constructor(private carViewService: CarViewService,private carUpdateService: CarUpdateService ){}

  ngOnInit(): void {
    this.initialized = true; 
  }

  ngOnChanges(changes: SimpleChanges): void {
    //check component initialization before processing carId changes
    if (this.initialized) {
      const carIdChange = changes['carId'];
      if (carIdChange && this.carId !== null) {
        this.findCar();
      }
    }
  }

  findCar() {
    this.carViewService.getCarDetails(this.carId).subscribe(
      (data: Cars) => {
        this.carDetails = data;
      }
    );
  }

  submitForm() {
    this.carUpdateService.updateCarDetails(this.carDetails).subscribe((data: Cars) => {
        this.carDetails = data;
        //send latest data to update in table
        window.location.reload();
      });
  }
  

  closeDialogView() {
    this.closeDialog.emit();
  }
}
