import { DetalleService } from './../detalle.service';
import { Detalle } from './../detalle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  constructor( private detalleServicio: DetalleService) { }

  facturas:Detalle[];

  ngOnInit(): void {
    this.obtenerDetalles();
  }

  private obtenerDetalles(){
    console.log('obtengo detalles');
    this.detalleServicio.obtenerlistaDetalle().subscribe(dato => {
      this.facturas = dato;
      console.log(this.facturas);
    })
  }

}
