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

const jimin = new Persona('Park Jimin', 'Jimin', 'Lachibolala');
const jhope = new Persona('Jung Hoseok', 'J-Hope', 'Im your hope, your my hope. Im J-Hope');

console.log(jimin);
console.log(jhope);

jimin.miFrase();
jhope.miFrase();

jimin.setComidaFavorita = 'Pizza carbonara';

console.log('Conteo estático', Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();