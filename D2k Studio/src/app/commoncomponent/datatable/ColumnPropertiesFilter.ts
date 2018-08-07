import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'columnPropertiesFilter',
    pure: false
})
export class ColumnPropertiesFilter implements PipeTransform {
  transform(items: any, filter: any): any {

    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: any) => this.applyFilter(item, filter));
  }

  applyFilter(item: any, filter: any): boolean {
    for (const field in filter) {
      if (filter[field]) {
          try {
            let itemValue = item[field];
            try {
                itemValue = itemValue.toString().toLowerCase();
            } catch {

            }
            let filterValue = filter[field];
            try {
                filterValue = filterValue.toString().toLowerCase() + '';
            } catch {

            }

          if (itemValue.indexOf(filterValue) === -1) {
            return false;
          }
        } catch {
            return true;
        }
      }
    }
    return true;
  }
}
