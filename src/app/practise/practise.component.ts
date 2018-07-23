import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent  {
	text111="sss";
 @Input()  name:string ;
  @Input()  text:string ;
  @Output() setin: EventEmitter<string> = new EventEmitter<string>();
 
 textss(){
 	 this.setin.emit(this.text111);
 }



}
