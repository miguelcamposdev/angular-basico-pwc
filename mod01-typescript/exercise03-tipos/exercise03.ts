function mesesDeLaEstacion(estacion) {
    let mesesEstacion: string;
    switch (estacion) {
        case "Otono":
            mesesEstacion = "Septiembre a Noviembre";
            break;
        case "Invierno":
            mesesEstacion = "Diciembre a Febrero";
            break;
        case "Primavera":
            mesesEstacion = "Marzo a Mayo";
            break;
        case "Verano":
            mesesEstacion = "Junio a Agosto";
    }
    return mesesEstacion;
}

console.log(mesesDeLaEstacion("Otono"));