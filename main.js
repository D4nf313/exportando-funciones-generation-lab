<<<<<<< HEAD
import { suma, resta,multiplicacion,area } from "./operaciones-matematicas.js";


console.log('la suma es : '+suma(5, 3)); 
console.log('la resta es: '+resta(10, 4)); 
console.log('la multiplicacion es: '+multiplicacion(2, 6)); 
console.log('el area es: '+area(3)); 
=======
import { pi,iva,DIAS_SEMANA,areaCirculo} from "./constantes.js";
import {aplicarDescuento, aplicarImpuesto, calcularTotal} from "./operaciones-matematicas.js"
 
console.log(areaCirculo(5));
console.log(DIAS_SEMANA[3-1])
<<<<<<< HEAD
>>>>>>> aa3580250df5bd92ccdac5d6bf4ca97e48c20b35
=======

const valorBebida = 3500;
const cantidad = 12;


let total =calcularTotal(valorBebida, cantidad)
console.log(`Tolal bebidas: ${total}` )

let totalConIva = aplicarImpuesto(total);
console.log(`Tolal bebidas con IVA: ${totalConIva}`)

let totalConDescuento = aplicarDescuento(totalConIva)
console.log(`Tolal bebidas con Descuento: ${totalConIva}`)







>>>>>>> d95f1c5753282acc764d79faacd4e30c48398529
