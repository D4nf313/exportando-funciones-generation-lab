import { pi,iva,DIAS_SEMANA,areaCirculo} from "./constantes.js";
import {aplicarDescuento, aplicarImpuesto, calcularTotal} from "./operaciones-matematicas.js"

console.log(areaCirculo(5));
console.log(DIAS_SEMANA[3-1])

const valorBebida = 3500;
const cantidad = 12;


let total =calcularTotal(valorBebida, cantidad)
console.log(`Tolal bebidas: ${total}` )

let totalConIva = aplicarImpuesto(total);
console.log(`Tolal bebidas con IVA: ${totalConIva}`)

let totalConDescuento = aplicarDescuento(totalConIva)
console.log(`Tolal bebidas con Descuento: ${totalConIva}`)







