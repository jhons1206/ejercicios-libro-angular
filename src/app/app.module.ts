import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { ComponentePropiedadesComponent } from './componente-propiedades/componente-propiedades.component';
import { FormsModule } from '@angular/forms';
import { DecoradoresComponent } from './decoradores/decoradores.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    ComponentePropiedadesComponent,
    DecoradoresComponent,
    ComunicacionComponent,
    CicloDeVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
