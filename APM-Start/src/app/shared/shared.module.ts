import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces';

@NgModule({
  imports: [
    CommonModule // needed in every feature module - added by default by angular cli
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule, // [(ngModel)]
  ]
})
export class SharedModule { }
