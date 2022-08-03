import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return value + ' ' + args[0] + ' ' + args[1]; 
  }

}
