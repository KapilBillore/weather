import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FetchweatherService } from '../fetchweather.service';
import { Weather } from '../shared/Weather.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  weather: Weather = {
    timezone: '',
    temperature: 0,
    description: '',
    icon:''
  };

  weather2:any;

  imgsrc='';

  constructor(private fetchweather: FetchweatherService) { }

  ngOnInit(): void {

    let lat: number;
    let long: number;

    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log(lat + " , " + long);

      this.fetchweather.getData(lat, long).subscribe(res => {
        let temp: string[] = res.current.weather;
        this.weather = new Weather(res.timezone, res.current.temp, res.current.weather[0].description, res.current.weather[0].icon)
        this.imgsrc=`http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;

        // this.weather2=res;
        // console.log(this.weather2)
      });



    });

  }

}
