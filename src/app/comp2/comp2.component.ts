import { Component} from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
	model:any = {};
 // onSubmitPersonForm(fm) {
	// 	console.log('Form Validated:'+fm.form.valid);
	//  	console.log('Form is being submitted');
 // }
 selects(form:NgForm){
 	console.log(this.model);
 	form.reset();
 }


}
