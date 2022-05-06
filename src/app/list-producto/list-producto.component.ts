import { Producto } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  constructor(private detalleServicio: DetalleService) { }

  productos : Producto[];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.detalleServicio.obtenerlistaProducto().subscribe( dato => {
      this.productos = dato
    })
  }

}
