import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXMissions } from '../models/space-x-mission.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';
  private missionDetailsUrl = 'https://api.spacexdata.com/v3/launches/';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<SpaceXMissions[]> {
    return this.http.get<SpaceXMissions[]>(this.baseUrl);
  }

  getMissionDetails(flightNumber: string): Observable<SpaceXMissions> {
    return this.http.get<SpaceXMissions>(`${this.missionDetailsUrl}${flightNumber}`);
  }
}
