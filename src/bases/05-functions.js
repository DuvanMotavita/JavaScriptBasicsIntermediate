//Funciones en js
// const salut = function(name){
//     return `Hola ${name}`;
// }
const salut2 = (name) => {
    return `Hola ${name}`;
}

const salut3 = (name) => `Hola ${name}`;
const salut4 = () => `Hola Mundo`;
//salut =30;
//console.log(salut('Goku'));
console.log(salut2('Vegeta'));
console.log(salut3('goku'));
console.log(salut4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'el_papu1502'
    });

const user = getUser();

console.log(user);

//Tarea
//1. Transform to arrow function
//2. Return implicit object
//3. Test this
const getActiveUser = (name) =>
    ( {
        uid: 'ABC567',
        username: name
    });

const activeUser = getActiveUser('Duvan');

console.log(activeUser);