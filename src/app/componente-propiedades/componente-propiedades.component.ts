import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-propiedades',
  templateUrl: './componente-propiedades.component.html',
  styleUrls: ['./componente-propiedades.component.css']
})
export class ComponentePropiedadesComponent {
  title = 'Página Propiedades';
  ponFondo = true;
  mostrar = true;
  habilitar = false;
  referencia = 'https://www.google.com.pe';

}
