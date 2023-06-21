class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarProducto() {
        return ('ID: ' + this.id + ' - ' + 'Producto: ' + this.nombre + ' - ' + 'Precio: $' + this.precio + '\n');
    }
}

// Array con los objetos creados
let productos = [
    new Producto(1, "Funda", 1500, "accesorios"),
    new Producto(2, "Templado", 1000, "accesorios"),
    new Producto(3, "Fuente Cargador", 800, "cargadores"),
    new Producto(4, "Cable USB", 500, "cargadores"),
    new Producto(5, "iPhone X", 400000, "celulares"),
    new Producto(6, "Motorola G20", 70000, "celulares"),
    new Producto(7, "Silla Gamer", 50000, "otros"),
    new Producto(8, "Auriculares Gamer", 5000, "otros"),
];

let categorias = ["accesorios", "cargadores", "celulares", "otros"];

let productosEnCarro = [];

let categoria = "";


// Menú con las categorias
while (categoria != "salir" && categoria != null) {
    let aux = categorias.join(", ");
    categoria = prompt(`Ingrese el nombre de una categoria para comprar, de lo contrario ingrese " salir ": \nCategorias: ( ${aux} )`);

    if (categoria != "salir" && categoria != null) {
        let productosFiltradosPorCategoria = productos.filter(
            (item) => item.categoria == categoria
        );

        let cartel = "";
        for (let i = 0; i < productosFiltradosPorCategoria.length; i++) {
            cartel += productosFiltradosPorCategoria[i].mostrarProducto();
        }

        let idSeleccionado = parseInt(prompt(`Seleccione el número del producto que desea comprar:\n\n ${cartel}`));

        let = productoParaCarro = productosFiltradosPorCategoria.find((item) => item.id == idSeleccionado);

        if (productoParaCarro) {
            productosEnCarro.push(productoParaCarro);
        }
    }
}

//Si hay algo en el carrito te pide que ingreses tu nombre, de lo contrario no
if (productosEnCarro.length > 0) {
    alert("A continuación ingrese sus datos para finalizar su compra");
    let nombre = prompt("Ingrese su nombre:");
    comprar(nombre, productosEnCarro);
}

function comprar(nombre, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);
    alert(`${nombre}, gracias por tu compra. \nSu total es: $${cant}`);
}