import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleComponent } from './detalle/detalle.component';






const routes : Routes = [
    {path : '' , component : HomeComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'usuarios', component : UsuariosComponent},
    {path : 'detalle/:id' , component : DetalleComponent }

]

export const app_routing = RouterModule.forRoot(routes);