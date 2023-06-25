import { Component, OnInit, SimpleChanges, Input, OnChanges, ViewChild, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {

  title: string = 'Ciclo de vida Componentes';

  @Input() 
  entradaHijo: string = '';

  contador: number = 0;

  constructor() {}

  ngOnInit() {
    this.mostrar('pasa por ngOnInit');
  }

  ngOnChanges(cambios: SimpleChanges) {

    for(let propiedad in cambios) {

      let cambio = cambios[propiedad];

      let actual = JSON.stringify(cambio.currentValue);

      let anterior = JSON.stringify(cambio.previousValue);

      this.mostrar("Pasa por ngOnChanges. Propiedad (" + propiedad + ") valor actual (" + actual + ") valor anterior (" + anterior + ")");
    }
  }

  ngDoCheck() {
    this.mostrar('pasa por ngDoCheck');
  }

  ngAfterContentInit() {
    this.mostrar('pasa por ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.mostrar('pasa por ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.mostrar('pasa por ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.mostrar('pasa por ngAfterViewChecked');
  }

  public mostrar(texto: string) {
    this.contador += 1;

    console.log(this.contador + ' - ' + texto);
  }

}
