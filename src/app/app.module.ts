import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LignesComponent } from './lignes/lignes.component';
import { StationsComponent } from './stations/stations.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HorairesComponent } from './horaires/horaires.component';
import { TraficsComponent } from './trafics/trafics.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { GererMesStationsComponent } from './gerer-mes-stations/gerer-mes-stations.component';



@NgModule({
  declarations: [
    AppComponent,
    LignesComponent,
    StationsComponent,
    DestinationsComponent,
    HorairesComponent,
    TraficsComponent,
    MessagesComponent,
    GererMesStationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
