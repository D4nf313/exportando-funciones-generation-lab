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





