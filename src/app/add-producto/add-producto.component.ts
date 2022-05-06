import { Producto } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../detalle.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto : Producto = new Producto();
  constructor(private detalleService: DetalleService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    this.detalleService.registrarProducto(this.producto).subscribe(dato => {
      this.irProducto();
    }, error => console.log(error))
  }

  irProducto(){
    this.router.navigate(['/productos'])
  }

  onSubmit(){
    this.guardarProducto();
  }

}
