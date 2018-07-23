import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
  name: 'pip1',
  pure:false
})
export class Pip1Pipe implements PipeTransform {

 transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'name');
        }
        return value;
    }
}
