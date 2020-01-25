import { Component, OnInit } from '@angular/core';
import { RutasParametrosService } from '../servicios/rutas-parametros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private dataRutas : RutasParametrosService , private router : Router) { }
  usuarios : Array<object>;
  ngOnInit() {
    this.usuarios = this.dataRutas.getData();

  }

  
  verDetalle(i:number) {
    this.router.navigate(['detalle',i]);
    console.log(['detalle',i]);
  }

}
