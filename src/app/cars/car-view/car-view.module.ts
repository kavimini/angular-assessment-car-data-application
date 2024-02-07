import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CarViewComponent } from "./car-view.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsModule } from "../cars.module";


@NgModule({
    declarations: [
      CarViewComponent 
    ],
    imports: [
      CommonModule,
      RouterModule,
      BrowserAnimationsModule,
      CarsModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        CarViewModule
      ]
  })  
  export class CarViewModule { }