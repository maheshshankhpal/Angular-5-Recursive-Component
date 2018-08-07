import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'd2k-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() ngModel: string;
  @Input() ngId: string;
  @Input() ngLabel: string;
  @Input() ngVisible: boolean;
  @Input() ngDisable: boolean;
  @Input() ngType: string;
  @Input() ngDataType: string;
  @Input() ngMaxLength: number;
  @Input() flex: string;
  @Output() ngBlur = new EventEmitter();
  @Output() ngKeyUp = new EventEmitter();
  @Output() ngKeyDown = new EventEmitter();

  @Output() ngOnModelChange = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeVisibility(this.ngVisible);
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:prefer-const
    for (let propName in changes) {
      if (propName === 'ngVisible') {
        this.changeVisibility(changes[propName].currentValue);
      }
    }
  }

  onBlur(event) {
    this.ngBlur.emit(event);

    if (this.ngDataType.toLowerCase() === 'mobile') {
      const pattern = /^[789]\d{9}$/;
      if ((this.ngModel !=null &&  this.ngModel != undefined && this.ngModel != "")  && !pattern.test(this.ngModel)) {
        this.ngModel = null;
        this.messageService.add({ severity: 'error', summary: "Notification", detail: 'Invalid Mobile Number, Mob No should start with 7,8,9.' });
      }
    }
    else if (this.ngDataType.toLowerCase() === 'email') {
      const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if ((this.ngModel != null && this.ngModel != undefined && this.ngModel != "") && !pattern.test(this.ngModel)) {
        this.ngModel = null;
        this.messageService.add({ severity: 'error', summary: "Notification", detail: 'Invalid Email ID' });
      }
    }
  }

  onKeyUp(event) {
    // console.log('Child - Key Up');
    this.ngKeyUp.emit(event);
  }

  onKeyDown(event) {
    // console.log('Child - Key Down');
    try {
      // tslint:disable-next-line:prefer-const
      let specialKeys = (event.keyCode !== 8 && event.keyCode !== 9 && !(event.keyCode >= 35 && event.keyCode <= 40));
      if (this.ngType.toLowerCase() === 'number') {
        const pattern = /[0-9]/;

        // let inputChar = String.fromCharCode(event.keyCode);
        // tslint:disable-next-line:prefer-const
        let inputChar = event.key;
        if (specialKeys && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      } else if (this.ngType.toLowerCase() === 'alpha') {
        const pattern = /[a-zA-Z ]/;
        // let inputChar = String.fromCharCode(event.keyCode);
        // tslint:disable-next-line:prefer-const
        let inputChar = event.key;
        if (specialKeys && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
    } catch (error) {

    }
    this.ngKeyDown.emit(event);
  }

  onModelChange() {
    this.ngOnModelChange.emit(this.ngModel);
  }

  changeVisibility(currentValue) {
    if (currentValue !== undefined) {
      // tslint:disable-next-line:prefer-const
      let elementId = document.getElementById(this.ngId);
      if (elementId !== null) {
        if (currentValue) {
          elementId.style['display'] = '';
        } else {
          elementId.style['display'] = 'none';
        }
      }
    }
  }
}
