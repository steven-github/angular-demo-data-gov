import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.less'],
})
export class HotelsComponent implements OnInit {
  indicents: any;
  loading: boolean = false;
  config: any;
  hotels = { count: 60, data: [] };
  constructor(
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngAfterViewChecked() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnInit(): void {
    this.loading = true;
    this._apiService.getHotels().subscribe((data) => {
      console.log(data['data']);
      this.hotels.data = data['data'];
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.hotels.data.length,
      };
      this.indicents = data;
      this.loading = false;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  viewHotelDetails(data) {
    this._router.navigate(['/hotel-details'], { state: { hotel: data } });
  }
}
