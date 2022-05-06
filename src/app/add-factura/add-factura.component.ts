import { DetalleService } from './../detalle.service';
import { Detalle } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.css']
})
export class AddFacturaComponent implements OnInit {

  detalle : Detalle = new Detalle();
  constructor(private detalleService: DetalleService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarDetalle(){
    this.detalleService.registrarDetalle(this.detalle).subscribe(dato => {
      this.irlista();
    }, error => console.log(error));
  }

  irlista(){
    this.router.navigate(['/detalles'])
  }

  onSubmit(){
    this.guardarDetalle();
  }

}
