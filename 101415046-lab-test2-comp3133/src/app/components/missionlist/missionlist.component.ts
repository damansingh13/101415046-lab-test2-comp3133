import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/space-x.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MissionfilterComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  years: string[] = [];

  constructor(private spaceXService: SpaceXService) {
    this.spaceXService.getMissions().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
    }); 
  }

  // Replace old year filter with full filter logic
  filterLaunches(filters: { year: string; successfulLaunch: string; successfulLand: string }) {
    const { year, successfulLaunch, successfulLand } = filters;

    this.filteredLaunches = this.launches.filter(launch => {
      const matchYear = !year || launch.launch_year === year;
      const matchLaunch =
        successfulLaunch === '' || String(launch.launch_success) === successfulLaunch;
      const matchLand =
        successfulLand === '' ||
        String(launch.rocket?.first_stage?.cores?.[0]?.land_success) === successfulLand;

      return matchYear && matchLaunch && matchLand;
    });
  }
}