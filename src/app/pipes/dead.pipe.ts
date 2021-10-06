import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dead'
})
export class DeadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Dead') {
      return value
    }
  }

}
