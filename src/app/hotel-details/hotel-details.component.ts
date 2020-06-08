import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.less'],
})
export class HotelDetailsComponent implements OnInit {
  hotel: any;
  address: string;
  latitude: number;
  longitude: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {
    if (!this._router.getCurrentNavigation().extras.state) {
      this._router.navigate(['']);
    } else {
      this.hotel = this._router.getCurrentNavigation().extras.state.hotel;
      console.log('this.hotel', this.hotel);
      this.latitude = parseInt(this.hotel[9][1]);
      this.longitude = parseInt(this.hotel[9][2]);
    }
  }

  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnInit(): void {}

  goBack() {
    this._location.back();
  }

  getAddress(json) {
    let parsed = JSON.parse(json);
    this.address = `${parsed.address}, ${parsed.city}, ${parsed.state}, ${parsed.zip}`;
    return this.address;
  }
}
