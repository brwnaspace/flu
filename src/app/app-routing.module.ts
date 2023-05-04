import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { DetailsPageComponent } from './features/home/pages/details-page/details-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { OpeningComponent } from './features/opening/pages/opening/opening.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, // colocar o auth na pag q eu quero que so veja
  {path: 'opening', component: OpeningComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'products-details/:id', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
