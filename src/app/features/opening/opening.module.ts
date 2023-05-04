import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningComponent } from './pages/opening/opening.component';



@NgModule({
  declarations: [
    OpeningComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    OpeningComponent
  ]
})
export class OpeningModule { }
