import { Component } from '@angular/core';
import {Service1Service} from '../service1.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component {

location:string ="Bangalore,Karnataka";
 date: number = Date.now();
 status:string = "Most Cloudy";
 deggres:any = "26F";
 presc:any ="7%";
 humidity:any="68%";
 wind:any ="7Kmph";
//for waether
weatherData:any=[];
imgurl= "https://developer.accuweather.com/sites/default/files/";
//for weather

  constructor(private service:Service1Service) { 
this.service.getWeatherData((data) =>{
    this.weatherData =data;
  });
  }



fetchData(){
      this.service.getWeatherData((data) =>{
    this.weatherData =data;
     console.log("coming");
    
  });
};
   private LOGO = "../../assets/logo.png";
   private imagePath ="../../assets/cloud1.png";
    // tims = [{value:"6pm"},{value:"7pm"},{value:"8pm"},{value:"9pm"},{value:"10pm"}]
    //  groups = [{name:"cloudy"},{name:"Most cloudy"},{name:"Most cloudy"},{name:"cloudy"},{name:"Most cloudy"}]
    //  degs = [{value:"26c"},{value:"23c"},{value:"24c"},{value:"25c"},{value:"27c"}]
    //   degs1 = [{value:"26c"},{value:"23c"},{value:"24c"},{value:"25c"},{value:"27c"}]
    //    degs2 = [{value:"26SW"},{value:"23NSW"},{value:"24NSW"},{value:"26W"},{value:"27W"}]
    //    images =[{path:"../../assets/cloud.png"},{path:"../../assets/cloud.png"},{path:"../../assets/cloud.png"},{path:"../../assets/cloud.png"},{path:"../../assets/cloud.png"}]
}