class Singleton {
    static instancia; // Undefined
    nombre = '';

    constructor(nombre = '') {
        console.log(Singleton.instancia); // Hay que poner Singleton porque es estatico

        if (!!Singleton.instancia) {
            // Si no existe ! -> true !! -> false
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Jimin');
const instanci2 = new Singleton('Jungkook');
const instanci3 = new Singleton('Suga');

// Todos se llaman Jimin
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);