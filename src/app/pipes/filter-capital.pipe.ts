import { Country } from './../models/country';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCapital',
})
export class FilterCapitalPipe implements PipeTransform {
  transform(value: Country[], filterText: string): Country[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter((c: Country) =>
          c.capital != null && c.capital.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
