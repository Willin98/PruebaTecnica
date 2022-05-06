import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddFacturaComponent } from './add-factura/add-factura.component';
import { FormsModule } from '@angular/forms';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { AddfacturaComponent } from './addfactura/addfactura.component';
import { ListfacturaComponent } from './listfactura/listfactura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDetalleComponent,
    AddFacturaComponent,
    AddClienteComponent,
    ListClienteComponent,
    AddProductoComponent,
    ListProductoComponent,
    AddfacturaComponent,
    ListfacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
