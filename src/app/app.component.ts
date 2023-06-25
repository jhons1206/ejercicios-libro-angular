import { Component } from '@angular/core';
import { Operaciones } from './operaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  salidaPadre: string = '';

  // valor1: string = '10';
  // valor2: string = '20';
  // resultadoP: number = 0;

  // captaResultado(event: any) {
  //   this.resultadoP = event; // Resultado: (suma, resta, multiplicación y división)
  // }


  // res1?: number;
  // res2?: number;
  // res3?: number;
  // res4?: number;

  // ngOnInit() {
  //   let operaciones = new Operaciones();
  //   this.res1 = operaciones.sumar(3,6);
  //   this.res2 = operaciones.restar(8,5);
  //   this.res3 = operaciones.multiplicar(2,7);
  //   this.res4 = operaciones.dividir(30,3);
  // }

}
