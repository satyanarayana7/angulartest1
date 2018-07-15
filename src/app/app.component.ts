import { Component,ViewChild } from '@angular/core';
import { Input,ElementRef } from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild(Comp1Component) childcmp:Comp1Component;

resets(){
    this.childcmp.resets1();
  }
}
