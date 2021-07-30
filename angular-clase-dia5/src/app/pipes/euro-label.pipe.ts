import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroLabel'
})
export class EuroLabelPipe implements PipeTransform {

  transform(precio: number): string {
    return (precio == 1)? 'euro' : 'euros';
  }

}
