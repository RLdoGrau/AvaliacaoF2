import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  countries: any[] = [];

  constructor(private countryService: CountryService) { }

  
  ngOnInit() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }
}
