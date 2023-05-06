import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        TicketsComponent
    ],
    exports: [
        TicketsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class TicketsModule { }
