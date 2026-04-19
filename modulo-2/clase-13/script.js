// 1. Invertir un array sin usar elementos avanzados
console.log("Invertir un array sin usar elementos avanzados");

let numeros = [4, 2, 6, 3, 9, 11,12]

console.log(numeros);

let nuevoArreglo =[]
let cantidad = numeros.length

for (let i = 0; i < cantidad; i++) {
    let numeroBorrado = numeros.pop();
    nuevoArreglo.push(numeroBorrado);
    
}

console.log(nuevoArreglo);

// 2. Crear un array y eliminar todos sus elementos usando pop en un loop

console.log("Crear un array y eliminar todos sus elementos");
let nuevoNumeros = [4, 2, 6, 3]
console.log(nuevoNumeros);
let cant = nuevoNumeros.length;


for (let i = 0; i < cant; i++) {
    let elementBorrado = nuevoNumeros.pop()
    elementBorrado
    console.log(`El número borrado es: ${elementBorrado}`);
}
console.log(nuevoNumeros);


// 3. Crear un array y duplicar todos sus elementos en consola (Pueden usar strings para que sea mas facil):

// 1 -> 11
// 2 -> 22
// 3 -> 33

console.log("Crear un array y duplicar todos sus elementos en consola");
let array = [1,"B","C",3]
for (let i = 0; i < array.length; i++) {
    console.log(String(array[i]) +" "+ String(array[i]));
    
}