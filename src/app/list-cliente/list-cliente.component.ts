import { Cliente } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  constructor(private detalleServicio: DetalleService) { }

  clientes: Cliente[];
  ngOnInit(): void {
    this.obtenerClientes();
  }

  private obtenerClientes(){
    this.detalleServicio.obtenerlistaCliente().subscribe( dato => {
      this.clientes = dato;
    })
  }

}
