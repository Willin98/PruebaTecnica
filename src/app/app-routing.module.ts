import { AddfacturaComponent } from './addfactura/addfactura.component';
import { ListfacturaComponent } from './listfactura/listfactura.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { AddFacturaComponent } from './add-factura/add-factura.component';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'detalles', component:ListaDetalleComponent},
  {path : '' , redirectTo : 'detalles', pathMatch: 'full'},
  {path : 'add-factura', component: AddFacturaComponent},
  {path : 'clientes', component: ListClienteComponent},
  {path : 'add-cliente', component : AddClienteComponent},
  {path : 'productos', component: ListProductoComponent},
  {path : 'add-producto', component : AddProductoComponent},
  {path : 'facturas', component: ListfacturaComponent},
  {path : 'addfactura', component : AddfacturaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
