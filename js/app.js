let a = 10; // Preferible
var b = 10; // Forma antigua
const c = 10; // No se puede modificar su valor en un futuro

let d = 10, 
    e = 20,
    f = 30,
    x = d + f;

// console.log('%c Mis variables', 'color:blue; font-weight: bold'); //Para ponerle estilos de css
console.log({a}); // Mostrar el log de la consola
console.warn({e}); // Para mostrar un warning/advertencia
console.error({f}); // Para mostrar un error, parece un error
//{e} --> Para que salga variable y valor
console.table({a, e, d, f}); // Crea una tabla separada por variable y valor

window.outerHeight; // Te da la altura
window.outerWidth; // Te da el ancho