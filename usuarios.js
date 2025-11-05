
export function obtenerFechaRegistro(){
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const año = ahora.getFullYear();

    return dia + "/" + mes + "/" + año ;
};

export function crearUsuario(nombre, rol){
    return{
        name:nombre,
        rol:rol,
        fechaRegistro: obtenerFechaRegistro()
    };
}

export function mostrarEstadoAdmin (usuario){
    const estado = usuario.rol;
    console.log(`- ${usuario.name} ${estado}.`);
}