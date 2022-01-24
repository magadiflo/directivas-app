import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    console.log('mensaje', this._mensaje);
    
  }
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    console.log('color', this._color);
    
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
