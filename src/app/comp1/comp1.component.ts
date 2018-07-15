import { Component} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{
   username: string;
   password: string;
   result: string;
   user:string;
   pass:string;
   results:string;
   form:string;
   reset:string;
   somename:string;
   submit()
   {
      if(this.username == "angular" && this.password == "Angular@123")
      {
         this.result = "You are successfully logged-in";
      }
      else{
      	this.result = "you are not given matching deatils";
      }
   }
 onSubmitPersonForm(fm) {
		console.log('Form Validated:'+fm.form.valid);
	 	console.log('Form is being submitted');
 }
 selects(){
  if(this.username == "angular" && this.password == "Angular@123")
  {
     return{
       color:'green',
     }
  }
  else{
    return{
      color:'red',
    }  
  }
 }
 resets1(){
  this.username = "";
  this.password = "";
  this.result = "";
}


}
