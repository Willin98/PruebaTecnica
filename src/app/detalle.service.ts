import { Detalle, Cliente, Producto, Factura } from './detalle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private baseURLDetalle = "http://localhost:8080/api/detalles";
  private baseURLCliente = "http://localhost:8080/api/clientes";
  private baseURLProducto = "http://localhost:8080/api/productos";
  private baseURLFactura = "http://localhost:8080/api/facturas";
  constructor(private httpClient: HttpClient) { }

  obtenerlistaDetalle(): Observable<Detalle[]>{
    return this.httpClient.get<Detalle[]>(`${this.baseURLDetalle}`);
  }
  
  registrarDetalle(detalle: Detalle) : Observable<Object>{
    return this.httpClient.post(`${this.baseURLDetalle}`,detalle);
  }

  obtenerlistaCliente(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURLCliente}`);
  }
  
  registrarCliente(cliente: Cliente) : Observable<Object>{
    return this.httpClient.post(`${this.baseURLCliente}`,cliente);
  }

  obtenerlistaProducto(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURLProducto}`);
  }
  
  registrarProducto(producto: Producto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURLProducto}`,producto);
  }

  obtenerlistaFactura(): Observable<Factura[]>{
    return this.httpClient.get<Factura[]>(`${this.baseURLFactura}`);
  }
  
  registrarFactura(factura: Factura) : Observable<Object>{
    return this.httpClient.post(`${this.baseURLFactura}`,factura);
  }
}
