import { heroes } from "./heroes"

const encontrarHeros = (id) => {
     return heroes.find((e) => e.id === id) 
}

const encontrarOwner = (owner) => {
    return heroes.filter((e) => e.owner === owner) 
}
/* console.log('Hola Mundo')

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4

console.log(nombre,apellido, valorDado)

if ( true ) {
    let valorDado = 6;

    console.log(valorDado)
} */


console.log(encontrarHeros(2))
console.log(encontrarOwner('Marvel'))


