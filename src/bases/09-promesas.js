
import {getHeroeById} from "./bases/08-imp-exp";

// const promise  = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         //Tarea
//         const heroe = getHeroeById(1);
//         //console.log(heroe);
//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promise.then((heroe)=>{
//     console.log("heroe",heroe);
// }).catch(err => console.log(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //Task
            const heroe = getHeroeById(id);
            heroe?resolve(heroe):reject('El heroe no existe');
        }, 2000);
    });
}
getHeroeByIdAsync(2).then(console.log).catch(console.warn);