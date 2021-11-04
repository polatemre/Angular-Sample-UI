import { Country } from './../models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  api: string = 'https://localhost:44308/api/';
  country: Country[] = [];

  constructor() {}

  async getAll() {
    const resp = await fetch(this.api + 'country/getall');
    const data = await resp.json();
    this.country = data;
  }
}
