import { CountryService } from './../services/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  capitalFilterText = '';
  allFilterText = '';
  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.countryService.getAll();
  }
}
