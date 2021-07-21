enum Estacion {
    Invierno,
    Primavera,
    Verano,
    Otono
};


function mesesDeLaEstacion(estacion: Estacion) {
    let mesesEstacion: string;
    switch (estacion) {
        case Estacion.Otono:
            mesesEstacion = "Septiembre a Noviembre";
            break;
        case Estacion.Invierno:
            mesesEstacion = "Diciembre a Febrero";
            break;
        case Estacion.Primavera:
            mesesEstacion = "Marzo a Mayo";
            break;
        case Estacion.Verano:
            mesesEstacion = "Junio a Agosto";
    }
    return mesesEstacion;
}

console.log(mesesDeLaEstacion(Estacion.Otono));