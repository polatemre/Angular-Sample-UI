import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'filterAll'
})
export class FilterAllPipe implements PipeTransform {

  transform(value: Country[], allFilterText: string): Country[] {
    allFilterText = allFilterText ? allFilterText.toLocaleLowerCase() : '';
    return allFilterText
      ? value.filter((c: Country) =>
          (c.capital != null && c.capital.toLocaleLowerCase().indexOf(allFilterText) !== -1) ||
          (c.name != null && c.name.toLocaleLowerCase().indexOf(allFilterText) !== -1) ||
          (c.region != null && c.region.toLocaleLowerCase().indexOf(allFilterText) !== -1)
        )
      : value;
  }

}
