import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common_btn_template',
  templateUrl: './common_btn_template.component.html',
  styleUrls: ['./common_btn_template.component.css']
})
export class Common_btn_templateComponent implements OnInit {
  @Input() BtnState:{
    Add: Boolean, Edit: Boolean, Delete: Boolean, Save: Boolean, Cancel: Boolean, Authorize: Boolean, Reject: Boolean 
    };

@Output() Operation = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }
  OperationWork(event): void {
    debugger;
    this.Operation.emit(event);
  }

}
