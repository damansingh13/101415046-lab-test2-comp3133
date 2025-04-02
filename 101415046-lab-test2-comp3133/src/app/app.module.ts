import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // For HTTP requests
import { AppRoutingModule } from './app-routing.module';  // Routing module you already created
import { AppComponent } from './app.component';  // Root component
import { MissionlistComponent } from './components/missionlist/missionlist.component';  // Mission List Component
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';  // Mission Details Component
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';  // Mission Filter Component

import { MatCardModule } from '@angular/material/card';  // Angular Material Card
import { MatButtonModule } from '@angular/material/button';  // Angular Material Button
import { MatSelectModule } from '@angular/material/select';  // Angular Material Select
import { MatFormFieldModule } from '@angular/material/form-field';  // Angular Material Form Field

@NgModule({
  declarations: [
    AppComponent,  // Main App Component
    MissionlistComponent,  // Mission List Component
    MissiondetailsComponent,  // Mission Details Component
    MissionfilterComponent  // Mission Filter Component
  ],
  imports: [
    BrowserModule,  // Required for running Angular in the browser
    AppRoutingModule,  // Routing configuration
    HttpClientModule,  // Allows making HTTP requests
    MatCardModule,  // Angular Material card for UI
    MatButtonModule,  // Angular Material button for UI
    MatSelectModule,  // Angular Material select for UI
    MatFormFieldModule  // Angular Material form field for UI
  ],
  providers: [],
  bootstrap: [AppComponent]  // The root component of your app
})
export class AppModule { }
