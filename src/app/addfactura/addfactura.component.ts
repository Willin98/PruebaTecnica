import { Factura } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DetalleService } from '../detalle.service';

@Component({
  selector: 'app-addfactura',
  templateUrl: './addfactura.component.html',
  styleUrls: ['./addfactura.component.css']
})
export class AddfacturaComponent implements OnInit {

  factura : Factura = new Factura();
  constructor(private detalleService: DetalleService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarFactura(){
    this.detalleService.registrarFactura(this.factura).subscribe( dato => {
      this.irFactura();
    }, error => console.log(error))
  }

  irFactura(){
    this.router.navigate(['/facturas'])
  }
  onSubmit(){
    this.guardarFactura();
  }

}
