export class Detalle {
    num_detalle:number;
    cantidad:number;
    precio:number;
    num_factura:number;
    id_producto:number;
}

export class Cliente {
    id_cliente: number;
    nombre: String;
    apellido : String;
    direccion : String;
    fecha_nacimiento: String;
    telefono: String;
    email: String;
}

export class Factura {
    num_factura: number;
    id_cliente: number;
    fecha: String;
}

export class Producto {
    id_producto: number;
    nombre: String;
    precio: number;
    stock: number;
}
