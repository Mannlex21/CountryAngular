import { Component } from '@angular/core';
import axios from 'axios';
import { Country } from './models/country.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries';
  username: string = '';
  countries: Country[] = [];
  
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.searchCountry();
  }
  searchCountry(event?: any) {
    let api = `https://restcountries.com/v3.1/all`;
    if(event!=null && event.target.value != '' ){
      api = `https://restcountries.com/v3.1/name/${event.target.value}`;
    }

    this.http.get<Array<Country>>(api).subscribe({
      next: (data: Country[]) => {
        console.log(data)
        this.countries = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  loginImg(url: string) {
    return this.http.get(url, { responseType: 'blob' });
  }
}

