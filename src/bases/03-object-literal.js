
const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address:{
        city: "Mildford",
        zip: 19706,
        lat: 14.3232,
        lng: 34.9233 
    }

}



const person2 = {...person};
person2.name ="Peter";
console.log(person);
console.log(person2);