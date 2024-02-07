import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarDeleteService } from './car-delete.service';
import { CarDataService } from '../shared/car-data-service';

@Component({
  selector: 'car-delete',
  templateUrl: './car-delete.component.html'
})
export class CarDeleteComponent implements OnInit{
  @Input() carId: number | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  status : string | null = null;
  errorMessage : string | null = null;
  isDeleted : boolean = false;

  constructor(private carDeleteService : CarDeleteService,private carDataService: CarDataService ){}

  ngOnInit(): void {
  }

  confirmDelete(){
    this.carDeleteService.deleteData(this.carId).subscribe(
      {
        next: () => {
            this.status = 'Delete successful';
            this.isDeleted = true;
            this.carDataService.emitDeleteSuccess(this.carId);
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }

  closeDialogDelete() {
    this.closeDialog.emit();
  }
}
