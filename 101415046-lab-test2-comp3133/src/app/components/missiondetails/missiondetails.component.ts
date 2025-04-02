import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../../services/space-x.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spacex: SpaceXService) {}

  ngOnInit(): void {
    this.spacex.getMissions().subscribe(data => {
      if (data && data.length > 0) {
        // Just take the first mission in the list (for example)
        this.mission = data[0];  // or set any default mission here
      }
    });
  }
}