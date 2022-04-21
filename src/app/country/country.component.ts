import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Country } from '../models/country.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  columns: number = 4;
  constructor(private http: HttpClient, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchCountry();
  }

  breakPoints() {
    switch(true) {
      case (window.innerWidth <= 480):
        this.columns = 1;
        break;
      case (window.innerWidth > 480 && window.innerWidth <= 900):
        this.columns = 2;
        break;
      case (window.innerWidth > 901 && window.innerWidth <= 1000):
        this.columns = 3;
        break;
      default:
        this.columns = 4;
    }
  }

  onResize(event:any) {
    this.breakPoints();
  }
    
  openDialog(item: Country) {
    const dialogRef = this.dialog.open(DialogComponent, {data: {country:item}});

    dialogRef.afterClosed().subscribe(result => {});
  }

  searchCountry(event?: any) {
    let api = `https://restcountries.com/v3.1/all`;
    if(event!=null && event.target.value != '' ){
      api = `https://restcountries.com/v3.1/name/${event.target.value}`;
    }

    this.http.get<Array<Country>>(api).subscribe({
      next: (data: Country[]) => {
        this.countries = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
