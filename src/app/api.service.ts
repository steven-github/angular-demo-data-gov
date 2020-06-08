import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  public getIncidents() {
    return this._http.get(
      `https://data.cityofnewyork.us/api/views/833y-fsy8/rows.json`
    );
  }
  public getHotels() {
    return this._http.get(
      `https://data.hawaii.gov/api/views/m3r4-2ghp/rows.json`
    );
  }
}
