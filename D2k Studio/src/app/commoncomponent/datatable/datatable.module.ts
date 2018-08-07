import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';

import { ColumnPropertiesFilter } from './ColumnPropertiesFilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from './TableFilter';

import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule} from 'primeng/toolbar';
import {CheckboxModule} from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
 import { MatIconModule,MatButtonModule,MatTooltipModule  } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , NgxPaginationModule
    , ToolbarModule
    , DropdownModule
    , CheckboxModule
    , MultiSelectModule
    , MatIconModule
    , MatButtonModule
    ,MatTooltipModule
    
  ],
  declarations: [
    DatatableComponent
    , ColumnPropertiesFilter
    , TableFilterPipe
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
