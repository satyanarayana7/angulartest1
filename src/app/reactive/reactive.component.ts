import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators,ValidatorFn,FormBuilder,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent{
  myForm1:FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passpattern = "^([a-zA-Z+]+[0-9+]+[&@!#+]+)$";
  constructor(formBuilder:FormBuilder) { 
  /*this.Rform=new FormGroup({
  fnameControl:new FormControl('',Validators.required),
  lnameControl:new FormControl('default last Name',Validators.required),
  emailControl:new FormControl('default email',Validators.required),
  passwordControl:new FormControl('default password',Validators.required)
 });*/
  this.myForm1=formBuilder.group({
    fnameControl:['',[Validators.required,Validators.minLength(5)]],
    lnameControl:['',[Validators.required,Validators.minLength(5)]],
    address:formBuilder.group({
      city:['',Validators.required],
      // city:['',[Validators.required,this.isBangalore()]],
      state:['',Validators.required],
      pincode:['',[Validators.required]],
    }),
    emailControl:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required, Validators.pattern(this.passpattern)]],
    confirmPassword:['',Validators.required]     
  },
  {
      validator: ReactiveComponent.MatchPassword // your validation method
    });
  //   this.model=new Model();
  }
  get emailControl() {
    return this.myForm1.get('emailControl');
} 
get password(){
	return this.myForm1.get('password');
}
  reactive(){
    console.log( this.myForm1);
    this.myForm1.reset();
  }
  static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
    // isBangalore():ValidatorFn{
    // 	return (control:AbstractControl):{[key:string]:any}|null=>{
    //   console.log("ControlsValue is", control);
    //   return (control.value.indexOf("bangalore")!=-1?null:{'CityKey':{value:control.value}});
    // }
    

}