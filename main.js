import { DIAS_SEMANA,areaCirculo, } from "./constantes.js";
import { aplicarDescuento, aplicarImpuesto, calcularTotal, suma, resta,multiplicacion,area, aplicarDescuentoPorRol} from "./operaciones-matematicas.js"
import { roles } from './usuariosConstantes.js';
import { crearUsuario, mostrarEstadoAdmin } from './usuarios.js';

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
console.log(`Tolal bebidas con Descuento: ${totalConDescuento}`)



//  Ejercicio 4
const usuario1 = crearUsuario("Pedro", roles.ADMIN);
const usuario2 = crearUsuario("Carlos", roles.CLIENTE);

console.log(usuario1);
console.log(usuario2);

mostrarEstadoAdmin(usuario1); // Pedro es Administrador.
mostrarEstadoAdmin(usuario2); // Carlos es Cliente regular.


let compraAdmin_productoUnit=25;
let compraClienteProductoUnit=50;
let cantidadCompraAdmin=4;
let cantidadCompraCliente=3;
let subtotalAdmin=calcularTotal(compraAdmin_productoUnit,cantidadCompraAdmin);
console.log("El subtotal del admin fue: " + subtotalAdmin);
tatalConIvaA= aplicarImpuesto(subtotalAdmin);
console.log("El total del iva fue: " + tatalConIvaA);
totalConDescA =  aplicarDescuentoPorRol(totalConIva, "admin")
console.log("El total con descuento fue: " + totalConDescA);
console.log("**********************")
let subtotalCliente=calcularTotal(compraClienteProductoUnit,cantidadCompraCliente);
console.log("El subtotal del cliente fue: " + subtotalClient);
totalConIvaC= aplicarImpuesto(subtotalCliente);
console.log("El total del iva fue: " +  totalConIvaC);
totalConDescC =  aplicarDescuentoPorRol(totalConIva, "cliente")
console.log("El total con descuento fue: " + totalConDesc);




