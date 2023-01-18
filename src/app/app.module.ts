import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MadsiRendezVousService } from './services/madsi-rendez-vous.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { MybackendServiceService } from './services/mybackend-service.service';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MadsiRendezVousService, MybackendServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
