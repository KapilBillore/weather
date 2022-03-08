import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchweatherService {

  constructor(private http: HttpClient) { }

  getData(lat:number, long:number) : Observable<any>{
    let url:string=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=af372c82ab8148a6ccef6f92660bd5c2&units=metric`;

    return this.http.get(url);
  }
}
