import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { dashboardRoutes } from './dashboard.routes';
import {ChildMetaDataComponent} from './child-meta-data/child-meta-data.component';

import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ContentComponent } from './dashboard/content/content.component';


import { DatatableModule } from '../CommonComponent/datatable/datatable.module';
import { GlobalService } from './Global.service';
import { MatIconModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatTabsModule } from '../../../node_modules/@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DatatableModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [GlobalService],
  declarations: [
    DashboardComponent, NavbarComponent,
    SidebarComponent, ContentComponent,
    HomeComponent
    , ChildMetaDataComponent
  ],
  exports: [DashboardComponent]

})
export class DashboardModule { }
