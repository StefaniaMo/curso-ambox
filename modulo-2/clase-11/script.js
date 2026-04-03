// 1️⃣ Mostrar números del 1 al 100
console.log("Mostrar numeros del 1 al 100")
let i = 1

while (i <= 100) {
    console.log(i)
    i++
}

// 2️⃣ Mostrar solo impares

console.log("Mostrar numeros impares del 1 al 100")
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

// 3️⃣ Mostrar múltiplos de 3
console.log("Mostrar numeros múltiplos de 3")
    for (let i = 1; i <= 100; i++) {
        console.log(i*3);
    }

// 4️⃣ Calcular suma del 1 al 10
console.log("Mostrar la suma de números del 1 al 10");
let contador=0;
for (let i = 1; i <=100; i++) {
    contador+=i
}
console.log(contador)
// Piramide de números
console.log("Pirámide de números");

for (let i = 1; i <= 4; i++) {
    let fila ="";
    for (let j = 1; j <= i; j++) {
        fila+=i
        
    }
   console.log(fila)
}