import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alive'
})
export class AlivePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Alive') {
      return value
    }
  }

}
