import { roles } from "./usuariosConstantes.js";

export function obtenerFechaRegistro(){
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();

    return dia + "/" + mes + "/" + año ;
};

export function crearUsuario(nombre, rol){
    return{
        nombre,
        rol,
        fechaRegistro: obtenerFechaRegistro()
    };
};

export function mostrarEstadoAdmin (usuario){
    const estado = esAdmin(usuario) ? "es Administrador" : "es Cliente regular";
    console.log(`- ${usuario.nombre} ${estado}.`);
};