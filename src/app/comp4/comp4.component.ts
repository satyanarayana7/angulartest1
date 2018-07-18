import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
location:string ="Bangalore,Karnataka";
 date: number = Date.now();
 status:string = "Most Cloudy";
 deggres:any = "26F";
 presc:any ="7%";
 humidity:any="68%";
 wind:any ="7Kmph";

  constructor() { }

   private LOGO = "../../assets/logo.png";
   private imagePath ="../../assets/cloud.png";
    tims = [{value:"6pm"},{value:"7pm"},{value:"8pm"},{value:"9pm"},{value:"10pm"}]
     groups = [{name:"cloudy"},{name:"Most cloudy"},{name:"Most cloudy"},{name:"cloudy"},{name:"Most cloudy"}]
     degs = [{value:"26c"},{value:"23c"},{value:"24c"},{value:"25c"},{value:"27c"}]
      degs1 = [{value:"26c"},{value:"23c"},{value:"24c"},{value:"25c"},{value:"27c"}]
       degs2 = [{value:"26SW"},{value:"23NSW"},{value:"24NSW"},{value:"26W"},{value:"27W"}]
}
