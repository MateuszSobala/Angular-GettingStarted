import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule, // fundamental Module for browser application + *ngIf/*ngFor
    FormsModule // [(ngModel)]
  ],
  bootstrap: [AppComponent], // starting component
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }]
})
export class AppModule { }

registerLocaleData(localePl); // Angular pipes use locale data to format data based on the LOCALE_ID.
// If you set the value of LOCALE_ID to another locale, you must import locale data for that new locale.
