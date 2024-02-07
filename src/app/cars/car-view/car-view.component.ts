import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CarViewService } from './car-view.service';
import { Cars } from '../data/cars';

@Component({
  selector: 'car-view',
  templateUrl: './car-view.component.html'
})
export class CarViewComponent implements OnInit, OnChanges  {
  @Input() carId: number | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  carDetails: Cars | null = null;
  initialized: boolean = false;

  constructor(private carViewService: CarViewService) {}

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

  closeDialogView() {
    this.closeDialog.emit();
  }

}