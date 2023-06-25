import { Component, Attribute, HostListener } from '@angular/core';

@Component({
  selector: 'app-decoradores',
  templateUrl: './decoradores.component.html',
  styleUrls: ['./decoradores.component.css']
})
export class DecoradoresComponent {

  contaClick: number = 0;
  contaOver: number = 0;

  constructor( @Attribute('miAtributo') atributo: any) {
    console.log(atributo);
  }

  @HostListener('click', ['$event'])

  onHostClick(event: Event) {
    console.log("click en app " + event);

    this.contaClick += 1;
  }

  @HostListener('mouseover', ['$event'])

  onHostOver(event: Event) {
    console.log('mouseover app' + event);

    this.contaOver += 1;
  }

}
