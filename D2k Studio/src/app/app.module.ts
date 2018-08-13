import { RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { MatIconModule, MatButtonModule, MatTooltipModule,
   MatListModule, MatExpansionModule, MatFormFieldModule, MatTabsModule } from '@angular/material';
import { ChildMetaDataComponent } from './child-meta-data/child-meta-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildMetaDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
