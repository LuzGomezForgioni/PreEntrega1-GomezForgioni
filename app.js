let nombre = prompt("Ingresa tu nombre");

const fundas = 700;
const templados = 400;
const cargadores = 800;

let total = 0;
let cantidadFundas;
let cantidadTemplados;
let cantidadCargadores;

function catalogo() {
    for (let i = 0; i < 1000; i++) {
        let ingreso = Number(prompt(`Hola ${nombre}! Selecciona el artículo que deseas comprar: \n 1 - Fundas - $700 \n 2 - Templados - $400 \n 3 - Cargadores $800 \n 4 - Salir`));
        if (ingreso == 1) {
            cantidadFundas = Number(prompt("Ingrese cantidad de Fundas"));
            total += cantidadFundas * fundas;
        } else if (ingreso == 2) {
            cantidadTemplados = Number(prompt("Ingrese cantidad de Templados"));
            total += cantidadTemplados * templados;
        }
        if (ingreso == 3) {
            cantidadCargadores = Number(prompt("Ingrese cantidad de Cargadores"));
            total += cantidadCargadores * cargadores;
        } else if (ingreso == 4) {
            alert(`Gracias por tu compra ${nombre}, esperamos volver a verte!`);
            console.log(`${nombre}, el precio total de su compra es de: $${total} \n Funda/s: ${cantidadFundas} \n Templado/s: ${cantidadTemplados} \n Cargador/es: ${cantidadCargadores}`);
            break;
        }
    }
}

catalogo();