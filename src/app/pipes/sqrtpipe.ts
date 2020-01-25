import {Pipe, PipeTransform} from '@angular/core'; 
@Pipe ({ 
   name : 'sqrtPipe'
}) 
export class SqrtPipe implements PipeTransform {
   transform(val : number) : number {
      return Math.sqrt(val);
   }
}