import { PI, MENSAJE_BIENVENIDA } from './constantes.js';

export function suma(a,b) {
    return a + b;
}

export function resta(a,b) {
    return a - b;
}
export function multiplicacion(a,b) {
    return a *b;
}
export function area(r){
 
    return PI*r**2;
}
import { iva, DESCUENTO } from "./constantes.js";








//Ejercicio 3
 
export function calcularTotal(precio, cantidad){
    let total= precio *cantidad;
    return total;
  
}

export function aplicarImpuesto(total){
   let impuesto = total * iva;
   let totalConIva= total + impuesto;
       return  totalConIva;
}

export function aplicarDescuento(total){
   let descuento = total * DESCUENTO;
   let totalConDescuento= total - descuento;
       return  totalConDescuento;
}





