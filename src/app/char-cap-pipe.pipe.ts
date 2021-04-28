import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCapPipe'
})
export class CharCapPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0,10) + "...";
  }

}
