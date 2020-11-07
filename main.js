class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.siguiente = null
    }

    calcularPrecio(){
        let productos = this.cantidad
        let precioProducto = this.costo
        let total = productos * precioProducto
        return total
    }
}

class Almacen{
    constructor(){
        this.capacidad = []
        this.CapacidadMax = 20
        this.tamano = 0
        this.inicio = null
    }
    

    agregarProducto(producto){
        if(this.inicio == null){
            this.inicio = producto
        }else{
            let aux = this.inicio
            while(aux.siguiente !== null){
                aux = aux.siguiente
            }
            aux.siguiente = producto
        }
        this.tamano++
        return producto.producto
    }

    insertarProducto(producto, posicion){
        if(posicion<0 || this.capacidad.length >= this.tamano){
            return false
        }else{
            let aux = this.inicio
            let anterior
            if(posicion==0){
                producto.siguiente = aux
                this.inicio = producto
            } else{
                for(let i=0; i<posicion; i++){
                    anterior = aux
                    aux = aux.siguiente
                }
                producto.siguiente = aux
                anterior.siguiente = producto
            }
            this.tamano++
        }
        return producto.producto
    }

    borrarProductoID(idProducto){
        if(idProducto<0 || idProducto>this.tamano){
            return false
        }
        let aux = this.inicio
        let anterior = null

        if(idProducto == 0){
            this.head = aux.siguiente
        } else{
            for(let i=0; i<idProducto; i++){
                anterior = aux
                aux = aux.siguiente
            }
            anterior.siguiente = aux.siguiente
        }
        this.tamano--
        return aux.producto
    }

    buscarProductoID(idProducto){
        if(idProducto<0 || idProducto>=this.tamano){
            return false
        }
        let aux = this.inicio
        let anterior = null

        if(idProducto == 0){
            return aux.producto
        } else{
            for(let i=0; i<idProducto; i++){
                anterior = aux
                aux = aux.siguiente
            }
            return aux.producto
        }
        
    }

    listarProductos(){
        let aux = this.inicio
        let lista = ""
        while(aux){
            lista += aux.producto += " - "
            aux = aux.siguiente
        }
        lista += "Fin de la lista"
        return lista
    }

}

let testAlmacen = new Almacen()
let p1 = new Producto(1334, "sal", "sal de doña pelos", 100, 2)
let p2 = new Producto(1345, "pimienta", "recien molida", 30, 10)
let p3 = new Producto(1231, "ribeye", "marmoleo lvl 5", 10, 500)
let p4 = new Producto(1414, "tbone", "marmoleo lvl 4", 6, 500)
testAlmacen.agregarProducto(p1)
testAlmacen.agregarProducto(p2)
testAlmacen.agregarProducto(p3)
testAlmacen.insertarProducto(p4,2)
console.log(testAlmacen.buscarProductoID(2))
//console.log(testAlmacen.borrarProductoID(1))
console.log(testAlmacen.listarProductos())


let almacen = new Almacen()
var btnAnadir = document.querySelector("#btnAnadir")
btnAnadir.addEventListener('click', () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#producto").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = Number(document.querySelector("#cantidad")).value
    let precio = Number(document.querySelector("#costo")).value
    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(almacen.agregarProducto(producto) + " ha sido añadido al Almacen")
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
    let lista = document.querySelector("#lista1")
    let nuevoItem = document.createElement('li')
    nuevoItem.textContent = almacen.listarProductos()
    lista.appendChild(nuevoItem)
})
