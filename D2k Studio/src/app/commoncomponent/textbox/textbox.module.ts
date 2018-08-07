import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextboxComponent } from './textbox.component';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
      CommonModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule
      //FlexLayoutModule
  ],
  declarations: [TextboxComponent],
  exports: [TextboxComponent]
})
export class TextboxModule { }
