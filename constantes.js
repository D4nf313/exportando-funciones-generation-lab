
export const pi = 3.1416;
export const iva = 0.19;
export const DIAS_SEMANA = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"];
export const DESCUENTO = 0.1;


export function areaCirculo(radio){
    return pi*(radio**2)
}

export function diaDeseado(dia){
    return DIAS_SEMANA[dia-1]
}

//console.log(areaCirculo(5));
//console.log(diaDeseado(3));
