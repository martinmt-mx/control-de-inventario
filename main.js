class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }
}

class Almacen{
    constructor(){
        this.capacidad = []
    }

    agregarProducto(producto){
        if(capacidad.length >= 20){
            return "Almacen lleno"
        }else{
            this.capacidad.push(producto)
        }
    }
}
