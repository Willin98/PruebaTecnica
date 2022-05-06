import { Factura } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-listfactura',
  templateUrl: './listfactura.component.html',
  styleUrls: ['./listfactura.component.css']
})
export class ListfacturaComponent implements OnInit {

  constructor(private detalleServicio: DetalleService) { }

  facturas: Factura[];

  ngOnInit(): void {
    this.obtenerFacturas();
  }

  private obtenerFacturas(){
    this.detalleServicio.obtenerlistaFactura().subscribe( dato => {
      this.facturas = dato;
    })
  }
}
