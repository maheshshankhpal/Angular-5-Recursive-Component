import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'd2k-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() gridOptions: {
    columns: any[],
    IsAction: boolean,
    isAddBtnShow: boolean,
    isUploadBtnShow: boolean,
    isFileDownloadBtn:boolean,
    isCloneBtn:boolean
  };
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRowSelection = new EventEmitter();

  @Output() onItemClone = new EventEmitter();

  @Output() getSelectedRows = new EventEmitter();

  @Output() OnAddBtnClick = new EventEmitter();

  @Output() uploadNewExcel = new EventEmitter();

  @Output() OnShowuploader = new EventEmitter();

  @Output() selectedRows = [];

  dataFilter = {};

  selectedColumns;
  p = 1;

  rowSelectAll = false;
  items = 5;

  itemsperPage = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 }
  ];
  columnsDef = {
    'header': '',
    'data_key': '',
    'header_style': '',
    'header_cssClass': '',
    'data_style': '',
    'data_cssClass': 'tbColumnDataDefault',
    'visible': true
  };

  constructor() { }

  ngOnInit() {
    if (this.gridOptions['IsSearchEnable'] === undefined) {
      this.gridOptions['IsSearchEnable'] = true;
    }

    if (this.gridOptions['columns'] === undefined) {
      this.gridOptions['columns'] = [];
      if (this.gridOptions['data'] !== undefined) {
        // tslint:disable-next-line:prefer-const
        for (let key in this.gridOptions['data'][0]) {
          if (key !== undefined) {
            // tslint:disable-next-line:prefer-const
            let column = Object.assign({}, this.columnsDef);
            column['header'] = key;
            column['data_key'] = key;
            this.gridOptions['columns'].push(column);
          }
        }
      }
    }

    if (this.gridOptions['rowSelect'] === undefined) {
      this.gridOptions['rowSelect'] = true;
    }

    this.selectedColumns = this.gridOptions.columns;
  }

  changeFieldVisibility(currentItem) {
    // tslint:disable-next-line:no-debugger
    if (currentItem !== undefined) {
      const isVisible = this.selectedColumns.includes(currentItem);
      this.gridOptions.columns.filter(r => {
        if (r.data_key === currentItem.data_key) {
          r.visible = isVisible;
        }
      });
    } else {
      this.gridOptions.columns.forEach(element => {
        element.visible = this.selectedColumns.includes(element);
      });
    }
  }

  selectAllRows() {
    this.gridOptions['data'].forEach(element => {
      element['isRowSelected'] = this.rowSelectAll;
    });
  }


  onrowSelection(currentRow) {
    if (!currentRow['isRowSelected']) {
      this.rowSelectAll = false;
    } else {

      this.selectedRows = this.gridOptions['data'].filter(function (element) { return element.isRowSelected === true; });

      this.rowSelectAll = this.gridOptions['data'].length === this.selectedRows.length;
    }

    this.onRowSelection.emit(currentRow);
  }

  OnItemClone(item){
    this.onItemClone.emit(item);
  }

  onAddClick() {
    this.OnAddBtnClick.emit();
  }

  ShowUploader() {
    this.OnShowuploader.emit();
  }
}
