// 🎯 Parte 1
// Crear función calcularAreaRectangulo(base, altura) → retornar área
console.log("Función de Área");

function areaRectangulo(base, altura) {
    let resultadoArea = (base*altura);
    return  `El resultado de la base (${base}) por la altura (${altura}) es ${resultadoArea} cm2`;
}


console.log(areaRectangulo(10,5));
console.log(`--------------------`);

// Crear función esMayorDeEdad(edad) → retornar true/false
console.log("Función esMayorDeEdad booleano");
let esMayor;
function esMayorDeEdad(edad) {
    if (edad<18 ) {
        esMayor = false
        return `La edad es ${edad} y es menor de edad`
    }
        esMayor = true
        return `La edad es ${edad} y es mayor de edad`
    
}

console.log(esMayorDeEdad(18));
console.log(`--------------------`);

// Usar variable global pais y local ciudad dentro de función → mostrar ambas
console.log("Función Lugar con variable global y local");


let pais = "Argentina"

function lugar() {
    let ciudad ="Buenos Aires"
    return `Yo soy de ${ciudad}, ${pais}`
}

console.log(lugar(pais));
console.log("--------------------");

// Crear una funcion, que repita un texto, la cantidad de veces que se mande por props, ejemplo: repetirTexto("Hola", 3) esto deberia repetirse 3 veces
console.log("Funcion que repite un texto la cant. que se diga en prop.");

function repiteTexto(texto, cant) {
    for (let i = 0; i < cant; i++) {
        console.log(`"${texto}" se repitió ${cant} veces`);
    }
   
}
repiteTexto("hola",4)
console.log("--------------------");

// 🎯 Parte 2 — Bonus

// Crear función repetirTexto(texto, veces) → mostrar el texto repetido la cantidad de veces indicada

