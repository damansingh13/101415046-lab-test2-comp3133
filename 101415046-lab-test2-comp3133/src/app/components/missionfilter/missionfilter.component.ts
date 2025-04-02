import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Input() availableYears: string[] = [];

  @Output() filtersChanged = new EventEmitter<{
    year: string;
    successfulLaunch: string;
    successfulLand: string;
  }>();

  selectedYear = '';
  selectedLaunch = '';
  selectedLand = '';

  emitFilters() {
    this.filtersChanged.emit({
      year: this.selectedYear,
      successfulLaunch: this.selectedLaunch,
      successfulLand: this.selectedLand
    });
  }
}