import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasParametrosService } from '../servicios/rutas-parametros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle : object;
  constructor(private _ac : ActivatedRoute , private rutaService : RutasParametrosService) { 
    this._ac.params.subscribe(response => {
      console.log(response);
      this.detalle = this.rutaService.getDetalle(response.id);
    })
  }

  ngOnInit() {
  }

}
