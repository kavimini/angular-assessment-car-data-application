import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarDeleteService } from './car-delete.service';

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

  constructor(private carDeleteService : CarDeleteService ){}

  ngOnInit(): void {
  }

  confirmDelete(){
    this.carDeleteService.deleteData(this.carId).subscribe(
      {
        next: () => {
            this.status = 'Delete successful';
            this.isDeleted = true;
            window.location.reload();
        },
        error: error => {
          this.status = 'Delete unsuccessful';
          console.error('There was an error!', error);
        }
    });
  }

  closeDialogDelete() {
    this.closeDialog.emit();
  }
}
