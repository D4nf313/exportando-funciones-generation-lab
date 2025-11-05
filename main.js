import { suma, resta,multiplicacion,area,aplicarDescuentoPorRol } from "./operaciones-matematicas.js";
import { pi,iva,DIAS_SEMANA,areaCirculo,aplicarDescuento, aplicarImpuesto, calcularTotal} from "./constantes.js";

console.log('la suma es : '+suma(5, 3)); 
console.log('la resta es: '+resta(10, 4)); 
console.log('la multiplicacion es: '+multiplicacion(2, 6)); 
console.log('el area es: '+area(3)); 


 

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

let compraAdmin_productoUnit=25;
let compraCliente_productoUnit=50;
let cantidadCompraAdmin=4;
let cantidadCompraCliente=3;
let subtotalAdmin=calcularTotal(compraAdmin_productoUnit,cantidadCompraAdmin);