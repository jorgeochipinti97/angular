import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknown'
})
export class UnknownPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
if (value == 'unknown') {
  return value
}  }

}
