import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CarsComponent } from "./cars.component";
import { CarViewModule } from "./car-view/car-view.module";
import { CarUpdateModule } from "./car-update/car-update.module";


@NgModule({
    declarations: [
      CarsComponent 
    ],
    imports: [
      CommonModule,
      RouterModule,
      CarViewModule,
      CarUpdateModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        CarsModule,
        CarViewModule,
        CarUpdateModule
      ]
  })  
  export class CarsModule { }