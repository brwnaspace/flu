import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { OpeningModule } from './features/opening/opening.module';
import { TicketsModule } from './features/tickets/tickets.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    OpeningModule,
    TicketsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
