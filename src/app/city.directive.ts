import { Directive , ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appCity]'
})
export class CityDirective {

  constructor(public el: ElementRef){
  	
  }

}
