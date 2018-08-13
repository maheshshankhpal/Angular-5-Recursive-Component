import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-meta-data',
  templateUrl: './child-meta-data.component.html',
  styleUrls: ['./child-meta-data.component.css']
})
export class ChildMetaDataComponent implements OnInit {

   @Input() value;

   @Input() childData: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  changeValue() {
    //this.value = false;
  }
}
