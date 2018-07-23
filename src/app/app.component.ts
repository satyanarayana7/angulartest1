import { Component,ViewChild } from '@angular/core';
import { Input,ElementRef } from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';
// import {HttpClient}  from '@angular/common/http';
import {Service1Service} from './service1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	text111="Before we proceed to start coding the Input and Output decorators";
	satya ="satyas";
	
	text ="Before we proceed to start coding the Input and Output decorators, let's see how to pass the data to any component.";
clicking($event){
	 this.text111;
}
// 	@ViewChild(Comp1Component) childcmp:Comp1Component;
// weatherData:any=[];
// imgurl= "https://developer.accuweather.com/sites/default/files/";
// pp = "https://developer.accuweather.com/sites/default/files/06-s.png";
// constructor(private service:Service1Service){
// 	this.service.getWeatherData((data) =>{
// 		this.weatherData =data;
// 	});
// }
// resets(){
//     this.childcmp.resets1();
array = [{cityname:"guntur",countryName:"india"},{cityname:"vijayawada",countryName:"india"},{cityname:"sydney",countryName:"australia"},{cityname:"toronto",countryName:"canada"},{cityname:"ontario",countryName:"canada"},{cityname:"perth",countryName:"australia"}]
//   }
}
