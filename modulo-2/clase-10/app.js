let nombre = "Martín";
let pais = "Argentina";
let edad = 18;
let tieneTrabajo = false;

// 1- Mostrar en consola un string con los 4 datos, pueden usar condicionales
// 2- Mostrar en consola si es mayor o menor de edad
// 3- Mostrar e consola si tiene trabajo 
// 4- Mostrar un mensaje en consola si tiene trabajo y es mayor de edad (Algo asi como "Puede trabajar" o "Esta trabajando")

if (edad >= 18 && tieneTrabajo == false) {
    console.log("El/la estimado/a Sr./Sra "+nombre+" proveniente de "+pais+", es mayor de edad y no tiene trabajo pero puede trabajar");
    
}else if(edad >= 18 && tieneTrabajo == true){
    console.log("El/la estimado/a Sr./Sra "+nombre+" proveniente de "+pais+", es mayor de edad y tiene trabajo.");
}else if(edad < 18 && tieneTrabajo == false){
    console.log("El/la estimado/a Sr./Sra Sr./Sra "+nombre+" proveniente de "+pais+", es menor de edad y no tiene trabajo pero no debería trabajar");
}else{
    console.log("El/la estimado/a Sr./Sra Sr./Sra"+nombre+" proveniente de "+pais+", es menor de edad y no debería trabajar");
}


