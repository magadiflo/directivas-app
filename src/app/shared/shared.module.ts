import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective,
  ],
  exports: [
    ErrorMsgDirective, //Se exporta para que otros módulos puedan hacer uso de esta directiva
    CustomIfDirective,
  ],
})
export class SharedModule { }
