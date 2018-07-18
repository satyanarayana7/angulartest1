import { Component} from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
name:string ="New User";
  constructor() { }

   private LOGO = "../../assets/logo.png";
array = [{cityname:"guntur",countryName:"india"},{cityname:"vijayawada",countryName:"india"},{cityname:"sydney",countryName:"australia"},{cityname:"toronto",countryName:"canada"},{cityname:"ontario",countryName:"canada"},{cityname:"perth",countryName:"australia"}]


}
