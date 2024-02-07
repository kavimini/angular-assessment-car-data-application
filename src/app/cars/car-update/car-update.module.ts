import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsModule } from "../cars.module";
import { CarUpdateComponent } from "./car-update.component";


@NgModule({
    declarations: [
      CarUpdateComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      BrowserAnimationsModule,
      CarsModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        CarUpdateModule
      ]
  })  
  export class CarUpdateModule { }