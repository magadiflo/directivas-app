import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
  ],
  exports: [
    ErrorMsgDirective, //Se exporta para que otros módulos puedan hacer uso de esta directiva
  ],
})
export class SharedModule { }
