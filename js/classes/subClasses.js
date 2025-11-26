class Persona {

    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje() {
        // Si haces referencia a los valores de nombre, codigo y eso, no tendran valor

    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
       // if (!nombre) throw Error('Necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        // Solo recibe un argumento
        this.comida = comida.toUpperCase(); // Para poner en mayúsculas
    }

    get getComidaFavorita() {
        return`La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Idol extends Persona {
    grupo = 'Sin grupo';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); // Hace referencia a la clase padre (Persona)
        this.grupo = 'BTS'; // This debe ir despues del super
    }

    quienSoy() {
        // Parece que sobre escribe lo que hay en el metodo
        console.log(`Soy ${this.nombre}, ${this.grupo}`);
        super.quienSoy(); // Tal cual de Persona
    }
}

const jimin = new Idol('Park Jimin', 'Jimin', 'Lachibolala');
//const jimin = new Idol;
console.log(jimin);
jimin.quienSoy();