import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) {

	 }
	 getWeatherData(callback:Function){
	 	  this.http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/261159?apikey=DMKrKhLakYKYWGt4LNeXtR7Vz2dCS8W0&language=en-us&details=false&metric=false")
	.subscribe(data=> {
		console.log(data);
		callback(data);
	});
	 }
}
