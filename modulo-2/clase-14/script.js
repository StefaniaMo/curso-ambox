
// 1---------------
console.log("Crear un nuevo array con todos los números multiplicados por 2");

let numeros = [5, 10, 15, 20];
console.log(numeros);

let numerosX2 = numeros.map((numero)=>{return numero * 2})

console.log(numerosX2);

// 2---------------
console.log("Crear un nuevo array sumando 5 a cada número");

let num = [3, 12, 7, 20, 1, 18];
console.log(num);

let numMas5 = num.map((nu)=>{return nu+5})
console.log(numMas5);

//3---------------

console.log("Obtener todos los numeros mayor a 10 del array anterior");

console.log(num);

let numMayor10 = num.filter((nu)=>{return nu>=10})
console.log(numMayor10);


//4---------------------
console.log("encontrar el numero mayor de num");

console.log(num);

//let totalVentas = ventas.reduce((acumulador, elemento) => acumulador + elemento, 0)
//let num = [3, 12, 7, 20, 1, 18];
let numMayTotal = num.reduce((acumulador, numActual) => {
    if (numActual>acumulador) {
       return acumulador = numActual;
    } else{
        return acumulador
    }
}, 0)
 
console.log(numMayTotal);
