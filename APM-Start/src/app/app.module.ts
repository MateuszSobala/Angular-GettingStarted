import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [ // private for the module; add only components, directives and pipes
    AppComponent,
    WelcomeComponent
  ],
  exports: [], // can export not imported modules, e.g. aggregator module
  imports: [ // imports are not inherited
    BrowserModule, // fundamental Module for browser application + *ngIf/*ngFor (from imported and exported CommonModule)
    // should only be imported into root module
    HttpClientModule, // HttpClient
    ProductModule,
    AppRoutingModule // important to have the default (wildcard) routes at the end, after the routes in feature modules are registered
    // router takes first match route
  ],
  bootstrap: [AppComponent], // starting component
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }]
})
export class AppModule { }

registerLocaleData(localePl); // Angular pipes use locale data to format data based on the LOCALE_ID.
// If you set the value of LOCALE_ID to another locale, you must import locale data for that new locale.
