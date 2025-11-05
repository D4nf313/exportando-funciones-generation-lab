import { pi,iva,DIAS_SEMANA,areaCirculo,aplicarDescuento, aplicarImpuesto, calcularTotal} from "./constantes.js";
import { aplicarDescuento, aplicarImpuesto, calcularTotal, suma, resta,multiplicacion,area, aplicarDescuentoPorRol} from "./operaciones-matematicas.js"
import { ROLES } from './usuariosConstantes.js';
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
console.log(`Tolal bebidas con Descuento: ${totalConIva}`)

let compraAdmin_productoUnit=25;
let compraCliente_productoUnit=50;
let cantidadCompraAdmin=4;
let cantidadCompraCliente=3;
let subtotalAdmin=calcularTotal(compraAdmin_productoUnit,cantidadCompraAdmin);

//  Ejercicio 4
const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);

console.log(usuario1);
console.log(usuario2);

mostrarEstadoAdmin(usuario1); // Pedro es Administrador.
mostrarEstadoAdmin(usuario2); // Carlos es Cliente regular.