import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const results=[]
   
    for( const character of value){
      if (character.name.toLowerCase().indexOf(arg.toString().toLowerCase()) != -1 ) {
        results.push(character)
      }
    }
    return results
  }

}
