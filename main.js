class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }

    calcularPrecio(){
        let productos = this.cantidad
        let precioProducto = this.costo
        let total = productos * precioProducto
        return `Precio total de ${this.producto}: ${total}`
    }
}

class Almacen{
    constructor(){
        this.capacidad = []
        this.CapacidadMax = 20
    }
    agregarProducto(producto){
        if(this.capacidad.length >= this.CapacidadMax){
            return "Almacen lleno"
        }else{
            this.capacidad.push(producto)
            return "Producto añadido"
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
        let lista = document.querySelector("#lista1")
        for(let i = 0; i<this.capacidad.length; i++){
            if(this.capacidad[i] !== undefined){
                let nuevoItem = document.createElement('li')
                nuevoItem.textContent = `${i}: ${this.capacidad[i].producto}`
                lista.appendChild(nuevoItem)
            }
        }
    }

    listarProductosInverso(){
        let lista = document.querySelector("#lista2")
        for(let i = this.capacidad.length-1; i>=0; i--){
            if(this.capacidad[i] !== undefined){
                let nuevoItem = document.createElement('li')
                nuevoItem.textContent = `${i}: ${this.capacidad[i].producto}`
                lista.appendChild(nuevoItem)
            }
        }
    }

    insertarProducto(producto, posicion){
        if(posicion>this.capacidad.length || this.capacidad.length >= this.CapacidadMax){
            return `${posicion} es un numero muy alto o el almacen está lleno`
        }else{
            if(posicion==this.capacidad.length){
                this.capacidad[posicion] = producto
                return `${producto.producto} ha sido añadido`
            }
            let productoAct
            let sigProducto = producto
            for(let i = posicion; i<this.capacidad.length; i++){
                productoAct = this.capacidad[i]
                this.capacidad[i] = sigProducto
                sigProducto = productoAct
            }
            this.capacidad[this.capacidad.length] = sigProducto
            return `${producto.producto} ha sido añadido` 
        }
        
    }
}
let almacen = new Almacen()
var btnAnadir = document.querySelector("#btnAnadir")
btnAnadir.addEventListener('click', () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#producto").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = Number(document.querySelector("#cantidad")).value
    let precio = Number(document.querySelector("#costo")).value
    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(almacen.agregarProducto(producto))
})

var btnCalcular = document.querySelector("#btnCalcular")
btnCalcular.addEventListener('click', () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#producto").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value
    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(producto.calcularPrecio())
})

var btnInsertar = document.querySelector("#btnInsertar")
btnInsertar.addEventListener('click', () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#producto").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value
    let posicion = document.querySelector("#posicion").value
    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(almacen.insertarProducto(producto, posicion))
})

var btnBorrar = document.querySelector("#btnBorrar")
btnBorrar.addEventListener('click', () => {
    let codigo = document.querySelector("#codigoBorrar").value
    alert(almacen.borrarProductoID(codigo))
})

var btnBuscar = document.querySelector("#btnBuscar")
btnBuscar.addEventListener('click', () => {
    let codigo = document.querySelector("#codigoBuscar").value
    alert(almacen.buscarProductoID(codigo))
})

var btnListar = document.querySelector("#btnListar")
btnListar.addEventListener('click', () => {
    almacen.listarProductos()
})

var btnListarInv = document.querySelector("#btnListarInv")
btnListarInv.addEventListener('click', () => {
    almacen.listarProductosInverso()
})