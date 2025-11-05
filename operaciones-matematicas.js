import { PI, MENSAJE_BIENVENIDA ,iva,DESCUENTO} from './constantes.js';
//import { iva, DESCUENTO } from "./constantes.js";
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


export function aplicarDescuentoPorRol(total, usuario) {
  const DESCUENTO_CLIENTE = DESCUENTO; // Por ejemplo, 10%

  if (usuario === 'admin') {
    return total - (total * 0.20);
  } else if (usuario === 'cliente') {
    // Cliente tiene descuento general
    return total - (total * DESCUENTO_CLIENTE);
  } else {
    console.warn("Usuario desconocido, no se aplica descuento.");
    return total;
  }
}



