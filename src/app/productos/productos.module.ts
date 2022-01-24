import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    SharedModule,
  ]
})
export class ProductosModule { }
