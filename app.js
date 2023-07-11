// PROYECTO PASTELERÍA, CREE 6 OBJETOS DE POSTRES. CON RESPECTO AL AGREGAR POSTRES ES PARECIDO AL DEL PROFE PORQUE
// QUERÍA PROBAR CÓMO FUNCIONABA ESO PERO EN UN FUTURO SE LO QUITARÍA PORQUE NO ME PARECE IDEAL QUE ESTE

class Postre {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    mostrarInfoPostre() {
        console.log(`El precio del postre ${this.nombre} es ${this.precio}`);
    }
}

const postre1 = new Postre(1, "Pavlova", 4000, "pavlova.png");
const postre2 = new Postre(2, "Lemon Pie", 3400, "lemonPie.png");
const postre3 = new Postre(3, "Chocotorta", 2800, "chocotorta.png");
const postre4 = new Postre(4, "Marquise", 3300, "marquise.png");
const postre5 = new Postre(5, "Cheesecake de Oreo", 3700, "cheesecakeOreo.png");
const postre6 = new Postre(6, "Rogel", 4500, "rogel.png");

const postre7 = new Postre(7, "Tarta de Coco", 3500, "tartaCoco.png");
const postre8 = new Postre(8, "Selva Negra", 2900, "selvaNegra.png");
const postre9 = new Postre(9, "Tarta Frutal", 3200, "tartaFrutal.png");
const postre10 = new Postre(10, "Chajá", 3000, "chaja.png");
const postre11 = new Postre(11, "Cheesecake de Frutillas", 3700, "cheesecakeFrutillas.png");
const postre12 = new Postre(12, "Brownie", 3600, "brownie.png");

let mostrador = [];

// ACÁ UTILICE EL OPERADOR SPREAD, NO ESTOY SEGURA AL 100% DE QUE LO HAYA HECHO BIEN, ME PODRÍAS CONFIRMAR CUANDO LO REVISES? GRACIAS!
// POR LAS DUDAS DEJE ABAJO COMENTADO LA OTRA FORMA SIN EL SPREAD
if (localStorage.getItem("mostrador")) {
    mostrador = JSON.parse(localStorage.getItem("mostrador"));
} else {
    mostrador = [...mostrador, postre1, postre2, postre3, postre4, postre5, postre6, postre7, postre8, postre9, postre10, postre11, postre12];
    localStorage.setItem("mostrador", JSON.stringify(mostrador));
}

// if (localStorage.getItem("mostrador")) {
//     mostrador = JSON.parse(localStorage.getItem("mostrador"))
// } else {
//     mostrador.push(postre1, postre2, postre3, postre4, postre5, postre6)
//     localStorage.setItem("mostrador", JSON.stringify(mostrador))
// }


let postresDiv = document.getElementById("postres")
let verProductos = document.getElementById("verProductos")
let ocultarProductos = document.getElementById("ocultarProductos")
let selectOrden = document.getElementById("selectOrden")
let btnAgregarPostre = document.getElementById("btnGuardarPostre")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let btnCarrito = document.getElementById("btnCarrito")
let precioTotal = document.getElementById("precioTotal")

let productosEnCarrito

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}

function mostrarPostres(array) {
    postresDiv.innerHTML = ``
    for (let postre of array) {
        let divPostreNuevo = document.createElement("div")

        divPostreNuevo.className = "col-12 col-md-4 col-lg-3 my-2"
        divPostreNuevo.innerHTML = `
        <div id="${postre.id}" class="card" style="width: 15rem;">
            <img class="card-img-top img-fluid" style="height: ; "src="img/${postre.imagen}" alt="${postre.nombre}">
            <div class="card-body">
                <h4 class="card-title">${postre.nombre}</h4>
                <p class="card-text">$${postre.precio}</p> 
                <button id="btnAgregar${postre.id}" class="btn btnAgregar">Agregar al carrito</button>
            </div>
        </div>`
        postresDiv.appendChild(divPostreNuevo)

        let btnAgregar = document.getElementById(`btnAgregar${postre.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(postre)
        })
    }
}

function agregarAlCarrito(postre) {
    let postreAgregado = productosEnCarrito.find((elem) => elem.id == postre.id)

    postreAgregado == undefined ?
        (productosEnCarrito.push(postre),
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)),
            console.log(productosEnCarrito)) :
        (console.log(`El postre ${postre.nombre} ya existe en el carrito `))
}

function cargarProductosCarrito(array) {
    modalBodyCarrito.innerHTML = ``
    array.forEach((productoCarrito) => {
        modalBodyCarrito.innerHTML += `
        <div>
            <div class="card border-primary" id ="productoCarrito${productoCarrito.id}" style="width: 13rem;">
                <img class="card-img-top" height="" src="img/${productoCarrito.imagen}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${productoCarrito.nombre}</h4>
                    <p class="card-text">$${productoCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
        </div>`
    })
    calcularTotal(array)

}

function calcularTotal(array) {
    let total = array.reduce((acc, productoCarrito) => acc + productoCarrito.precio, 0)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` : precioTotal.innerHTML = `El total es $<strong>${total}</strong>`
}

function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    console.log(menorMayor)
    menorMayor.sort((a, b) => a.precio - b.precio)
    mostrarPostres(menorMayor)
}

function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array)
    mayorMenor.sort((elem1, elem2) => elem2.precio - elem1.precio)
    mostrarPostres(mayorMenor)
}

function ordenarAlfabeticamenteNombre(array) {
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    mostrarPostres(arrayAlfabetico)
}

function agregarPostre(array) {
    let nombreIngresado = document.getElementById("nombreInput")
    let precioIngresado = document.getElementById("precioInput")

    const postreNuevo = new Postre(array.length + 1, nombreIngresado.value, precioIngresado.value, "postreNuevo.png")
    array.push(postreNuevo)
    localStorage.setItem("mostrador", JSON.stringify(array))
    mostrarPostres(array)

    nombreIngresado.value = ""
    precioIngresado.value = ""
}

function buscarPostres(buscado, array) {

    let busqueda = array.filter(
        (dato) => dato.nombre.toLowerCase().includes(buscado.toLowerCase())
    )

    busqueda.length == 0 ?
        (coincidencia.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
            mostrarPostres(busqueda)) :
        (coincidencia.innerHTML = "", mostrarPostres(busqueda))
}

btnAgregarPostre.addEventListener("click", function (event) {
    event.preventDefault()
    agregarPostre(mostrador)
})

verProductos.addEventListener("click", () => {
    mostrarPostres(mostrador)
})

ocultarProductos.ondblclick = () => {
    postresDiv.innerHTML = ``
}

selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    switch (selectOrden.value) {
        case "1":
            ordenarMayorMenor(mostrador)
            break
        case "2":
            ordenarMenorMayor(mostrador)
            break
        case "3":
            ordenarAlfabeticamenteNombre(mostrador)
            break
        default:
            mostrarPostres(mostrador)
            break
    }
})

buscador.addEventListener("input", () => {
    buscarPostres(buscador.value, mostrador)
})

btnCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})