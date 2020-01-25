import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentesComponent } from './componentes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { app_routing } from './componentes.route';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [HomeComponent,ComponentesComponent, UsuariosComponent, DetalleComponent],
  imports: [
    CommonModule,
    app_routing
  ],
  exports: [
    ComponentesComponent
  ]
})
export class ComponentesModule { }
