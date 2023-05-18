import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        LoginComponent,
        CadastroComponent
    ],
    exports: [
        LoginComponent,
        CadastroComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule, 
        ReactiveFormsModule
    ]
})
export class LoginModule { }
