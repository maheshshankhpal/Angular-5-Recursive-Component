import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'd2k-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() ngModel;
  @Input() ngId: 'AutoComplete';
  @Input() ngLable: string;
  @Input() displayStyle = '';
  @Input() ngCode;
  @Input() ngDisable: boolean;
  @Input() ngVisible: boolean;
  
  @Output() ngModelChange = new EventEmitter();

  @Output() ngCodeChange = new EventEmitter();
  @Output() ngValue = new EventEmitter();
  @Output() ngBlur = new EventEmitter();

  autoCompleteControls = new FormGroup({
    AutoComplete: new FormControl()
  });

  metaData: any[];

  @Input() masterdata: any[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentChecked() {
    this.onLoadBindData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.changeVisibility(this.ngVisible);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:prefer-const
    for (let propName in changes) {
      if (propName === 'ngDisable') {
        if (changes[propName].currentValue !== undefined) {
          if (changes[propName].currentValue === true) {
            this.autoCompleteControls.controls['AutoComplete'].disable();
          } else {
            this.autoCompleteControls.controls['AutoComplete'].enable();
          }
        }
      } else if (propName === 'ngVisible') {
        this.changeVisibility(changes[propName].currentValue);
      }
    }
  }

  showValueAutoComplete(master) {
    try {
      return master.Description;
    } catch (e) { }
  }

  filter(): string[] {
    try {
      // tslint:disable-next-line:prefer-const
      let val = this.autoCompleteControls.controls['AutoComplete'].value;

      return this.filterList(val);
    } catch (e) { }
  }

  filterList(val) {
    try {
      if (val === undefined) {
        return this.masterdata;
      } else {
        return this.masterdata.filter(option =>
          (option['Description'].toLowerCase().indexOf(val.toString().toLowerCase()) === 0 ||
            option['Code'].toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0));
      }
    } catch (error) {
    }
  }

  onModelChange() {
    try {
      if (this.ngModel !== undefined && this.ngModel !== null) {
        this.ngCode = this.ngModel['Code'];
        const value = this.ngModel['Description'];

        this.ngCodeChange.emit(this.ngCode);
        this.ngValue.emit(value);
      }
    } catch (error) {
    }
    this.ngModelChange.emit(this.ngModel);
  }

  onInputBlur() {
    try {
      if (this.ngModel['Code'] === undefined) {
        this.ngModel = '';
        this.ngModelChange.emit(this.ngModel);
      }
    } catch (error) {
      this.ngModel = '';
      this.ngModelChange.emit(this.ngModel);
    }

    this.ngBlur.emit();
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

  onLoadBindData() {
    if (this.ngCode !== undefined) {
      try {
        // tslint:disable-next-line:prefer-const
        let filterData = this.masterdata.filter(option =>
          option['Code'].toString().toLowerCase() === this.ngCode.toString());

        if (filterData.length > 0) {
          this.ngModel = filterData[0];
          this.cdr.detectChanges();
        }
      } catch (error) {
      }
    }
  }
}
