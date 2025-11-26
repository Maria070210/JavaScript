const madel = {
    nombre: 'Maria',
    edad: 23,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pepe = {
    nombre: 'Pepe',
    edad: 77,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

pepe.imprimir();

function Persona(nombre, edad) {
    // Poner mayuscula significa que es una funcion que me va a permitir crear instancias
    // Si no tiene un return es como si devolviera un undefined
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();