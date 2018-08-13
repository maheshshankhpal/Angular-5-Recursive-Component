import { Component, OnInit } from '@angular/core';
import * as metaData from './metaData.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public metaData =  metaData;

  childData: any[] = [];

  showChild = false;
  constructor() { }

  ngOnInit() {
  }

  metaDetails(data) {
    this.showChild = true;
    this.childData = [];
    this.childData.push(data);
  }


}

