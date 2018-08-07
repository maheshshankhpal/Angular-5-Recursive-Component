import { RequestOptions } from '@angular/http';
import { ApiHandler } from './providers/api-handler.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './providers/user.service';
import { AuthService } from './providers/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';

import { HomeService } from './dashboard/home/home.service';
import { APP_ROUTES } from './app.routes.ts';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { DatatableModule } from './CommonComponent/datatable/datatable.module';
export function handlerFunc(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new ApiHandler(backend, defaultOptions);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    DatatableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    UserService,
    AuthService,
    HomeService,
    {
      provide: ApiHandler,
      useFactory: handlerFunc, // (backend: XHRBackend, defaultOptions: RequestOptions) => new ApiHandler(backend, defaultOptions),
      deps: [XHRBackend, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
