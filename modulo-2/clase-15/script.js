// Crear objeto usuario


class Usuario {
    constructor(nombre, edad, email, activo) {
        this.nombre = nombre,
        this.edad = edad,
        this.email = email,
        this.activo = activo
    }
    saludo(){
        console.log( `Hola, soy ${this.nombre} y tengo ${this.edad} años`);
        
        
    }
    esMayorDeEdad(){
        
        console.log(this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad" );
         
    }
    tieneTrabajo(){
        console.log(this.activo == true? "Tiene trabajo": "No tiene trabajo");
        
    }
}
let usuario1 = new Usuario("Pedro", 31, "pedro@gmail.com", false)

usuario1.saludo()
usuario1.esMayorDeEdad()
usuario1.tieneTrabajo()

// Agregar método
// "Hola, soy Juan y tengo 25 años"
// Agregar método esMayorDeEdad()
// retorna true o false

// Modificar datos
// cambiar edad
console.log("Cambio de edad");

usuario1.edad = 40
console.log(usuario1.edad);
usuario1.saludo()
// agregar propiedad pais (Este van a tener que googlear)
usuario1.pais = "Argentina";
console.log(usuario1.pais);

class UsuarioCambio extends Usuario {
    constructor(nombre, edad, email, activo, pais) {
        super(nombre, edad, pais
        ), 
            this.pais= pais
    }
    nuevoSaludo() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`)
    }
    
}

let usuario2 = new UsuarioCambio("Carlos",48,"carlos@gmail.com", true, "Brasil")
usuario2.nuevoSaludo()