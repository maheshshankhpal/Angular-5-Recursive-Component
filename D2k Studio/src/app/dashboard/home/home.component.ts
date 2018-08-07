import { Component, OnInit } from '@angular/core';
import { metaData } from './metaData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public metaData = metaData;

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
