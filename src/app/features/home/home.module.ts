import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from "../../shared/shared.module";
import { InfoComponent } from './components/info/info.component';


@NgModule({
    declarations: [
        ProductsListComponent,
        HomeComponent,
        InfoComponent
    ],
    exports: [
        HomeComponent,
        InfoComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class HomeModule { }
