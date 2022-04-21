import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  // callApi() {
  //   let api = "http://xxx.com/api/productlist";
  //   axios.get(api)
  //     .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     })
  // }
}
