//destructuring array
const characters = ['Goku','Vegeta','Trunks'];

const [,,p3] = characters;

console.log(p3);

const returnArray = () =>{
    return ['ABC',123]
}

//const arr = returnArray();
//console.log(arr);
const[letters,numbers] = returnArray();
console.log(letters,numbers);

//Task
//1. first value called name 
//2. called setName
const usestate = (value) =>{
    return [value,()=>{console.log("Hello world")}] ;
}

const [name, setName] = usestate('Goku');

console.log(name );

setName();

//Not correct do this
/*console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);*/