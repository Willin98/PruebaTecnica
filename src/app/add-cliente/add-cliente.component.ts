import { DetalleService } from './../detalle.service';
import { Cliente } from './../detalle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  cliente : Cliente = new Cliente();
  constructor(private detalleService: DetalleService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarCliente(){
    this.detalleService.registrarCliente(this.cliente).subscribe(dato => {
      this.irCliente();
    }, error => console.log(error));
  }

  irCliente(){
    this.router.navigate(['/clientes'])
  }
  onSubmit(){
    this.guardarCliente();
  }

}
