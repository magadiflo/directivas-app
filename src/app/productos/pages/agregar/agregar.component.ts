import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['Martín', [Validators.required],],
  });

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

}
