function crearPersona (nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

function crearPersona2 (nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const  crearPersona3 = (nombre, apellido) => {
    return {
        nombre,
        apellido
    }
}

const  crearPersona4 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('María', 'Delgado');
const persona2 = crearPersona2('María', 'Delgado');

function imprimeArgumentos() {
    console.log( arguments ); 
}

const imprimeArgumentos2 = (args) => {
    // Esto solo te devuelve el primero
    console.log(args); 
}

const imprimeArgumentos3 = (...args) => {
    // Asi salen todos
    console.log(args); 
}
const imprimeArgumentos4 = (edad, ...args) => {
    // Asi saleel primer valor y en args pone array(número de elementos)
    console.log({edad, args}); 
}

imprimeArgumentos(7, true, false, 'Jimin', 'J-hope'); 
imprimeArgumentos2(7, true, false, 'Jimin', 'J-hope'); 
imprimeArgumentos3(7, true, false, 'Jimin', 'J-hope');
imprimeArgumentos4(7, true, false, 'Jimin', 'J-hope');

// Asi le asignas un nombre a cada parámetro
conts [edad, vivo, casado, nombre, yo] = imprimeArgumentos3(7, true, false, 'Jimin', 'J-hope');

const {apellido} = crearPersona('María', 'Delgado');
const {apellido: nuevoApellido} = crearPersona('María', 'Delgado'); // Cambio de nombre de variable

const tony = {
    nombre: 'Tony Stark', 
    codeName: 'Ironman',
    vivo: false, 
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
}

const imprimePropiedades = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('codeName',personaje.codeName);
    console.log('vivo',personaje.vivo);
    console.log('edad',personaje.edad);
    console.log('trajes',personaje.trajes);
}

const imprimePropiedades2 = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    // Si tiene edad la pone si no pone 15
    //edad = edad || 0; Si tiene edad la pone si no pone 0
}

imprimePropiedades(tony);