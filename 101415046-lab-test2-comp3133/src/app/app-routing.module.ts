import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },  // Default route for Mission List
  { path: 'mission/:id', component: MissiondetailsComponent }  // Route for Mission Details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configures the routing
  exports: [RouterModule]
})
export class AppRoutingModule {}
