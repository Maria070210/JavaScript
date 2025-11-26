class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
       // if (!nombre) throw Error('Necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        // Solo recibe un argumento
        this.comida = comida;
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