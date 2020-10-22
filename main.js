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
        if(this.capacidad.length >= 20){
            return "Almacen lleno"
        }else{
            this.capacidad.push(producto)
        }
    }

    borrarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                let eliminado = this.capacidad[i].producto
                this.capacidad.splice(i, 1)
                return `Producto eliminado: ${eliminado}`
            }
        }
    }

    buscarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                return `Producto encontrado: ${this.capacidad[i].producto}`
            }
        }
    }

    listarProductos(){
        for(let i = 0; i<this.capacidad.length; i++){
            if(this.capacidad[i] !== undefined){
                console.log(`${i}: ${this.capacidad[i].producto}`)
            }
        }
    }
}

let producto1 = new Producto(1,"Arroz","Arrozito rico", 30, 10)
let producto2 = new Producto(2,"Pan","Pan rico", 20, 5)
let producto3 = new Producto(3,"Elote","Elote rico", 25, 8)
let almacen = new Almacen()
almacen.agregarProducto(producto1)
almacen.agregarProducto(producto2)
almacen.agregarProducto(producto3)
console.log(almacen.borrarProductoID(3))
almacen.listarProductos()
console.log(almacen)
