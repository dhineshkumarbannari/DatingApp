import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http: HttpClient) { }

  values: any;
  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get("https://localhost:44373/api/Value/Get").subscribe(res => {
      this.values = res;
    }, err => {
      console.log(err);
    });
  }

}
