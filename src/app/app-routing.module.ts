import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { DetailsPageComponent } from './features/home/pages/details-page/details-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { OpeningComponent } from './features/opening/pages/opening/opening.component';
import { TicketsComponent } from './features/tickets/pages/tickets/tickets.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent}, 
  {path: 'opening', component: OpeningComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'ticket', component: TicketsComponent, canActivate: [AuthGuard]},
  {path: 'products-details/:id', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
