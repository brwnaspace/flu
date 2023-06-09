import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { OpeningComponent } from './features/opening/pages/opening/opening.component';
import { TicketsComponent } from './features/tickets/pages/tickets/tickets.component';
import { CadastroComponent } from './features/login/pages/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'opening', component: OpeningComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'ticket', component: TicketsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
