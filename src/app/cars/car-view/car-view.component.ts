import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CarViewService } from './car-view.service';
import { Cars } from '../data/cars';
import { CarDataService } from '../shared/car-data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'car-view',
  templateUrl: './car-view.component.html'
})
export class CarViewComponent implements OnInit, OnChanges, OnDestroy  {
  @Input() carId: number | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  carDetails: Cars | null = null;
  initialized: boolean = false;
  carUpdateSubscription: Subscription = new Subscription();

  constructor(private carViewService: CarViewService, private carDataService: CarDataService) {}

  ngOnInit(): void {
    //check initialization to prevent http request from triggering before carId is available
    this.initialized = true; 
    this.carUpdateSubscription = this.carDataService.getUpdatedCar().subscribe(updatedCar => {
      if (this.initialized && updatedCar.id === this.carDetails?.id) {
        this.carDetails = updatedCar;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
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
        console.log(this.carDetails);
      }
    );
  }

  closeDialogView() {
    this.closeDialog.emit();
  }

  ngOnDestroy(): void {
    this.carUpdateSubscription.unsubscribe();
  }
}