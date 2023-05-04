import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningComponent } from './pages/opening/opening.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OpeningComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    OpeningComponent
  ]
})
export class OpeningModule { }
