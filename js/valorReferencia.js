let a = 10;
let b = a;

a = 30;
// a pasará a valer 30 y b seguirá siendo 10

let jose = {nombre: 'Jose'};
let maria = jose;
maria.nombre = 'Maria';
// maria pasa a llamarse Maria, pero jose también se llama Maria

const cambiarNombre = (persona) => {
    persona.nombre = 'Jimin';
    return persona;
}

const cambiarNombre2 = ({...persona}) => {
    // Asi lo arreglas y cada uno tiene su nombre
    persona.nombre = 'Jimin';
    return persona;
}

let rose = {nombre: 'Rose'};
let jimin = cambiarNombre(rose);
// jimin se llama Jimin y rose tambien

let pepe = {nombre: 'Pepe'};
let mar = {pepe};
mar.nombre = 'Mar';
// mar se llama Mar y tiene un objeto que es Juan

// Pero si pones let mar = {...pepe} si que funciona, mar se llama Mar y pepe se llama Pepe

const frutas = ['Fresas', 'Caqui', 'Sandia'];
const otrasFrutas = frutas;

otrasFrutas.push('Melon');
// Este cambio se realiza en ambos sitios

const otrasFrutas2 = [...frutas]; // Este tarda mucho menos
const otrasFrutas3 = frutas.slice(); // Hacen lo mismo

otrasFrutas2.push('Melon');
// Añade melon solo a otrasFrutas2

// if ( dia === 6)

// const hoy = new Date();
// let dia = hoy.getDay();

// console.log(true); true
// console.log(!true); false
// console.log(!false); true
/*
cont heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman']
for(let i = 0; i < heroes.lenght; i++) {
    console.log(heroes[i]);
}
for(let i in heroes){
    console.log(heroes[i]);
}
Hacen lo mismo
for(let heroe of heroes){
Se pone el nombre en singular de la lista a recorrer
    console.log(heroe);
}
*/