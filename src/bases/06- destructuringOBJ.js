//destructuring object
//destructuring assignment
const person = {
    name: 'Tony',
    age: 45,
    key: 'IronMan',
   // rank: 'soldier'
}


const returnPerson = ({key,name, age, rank='captain'}) =>{

   return {
        keyName: key,
        ages: age,
        latlng:{
            lat: 14.1232,
            lng:-12.3232
        }
   }
}

const {keyName,ages,latlng:{lat,lng}} =  returnPerson(person);
//const {lat,lng} = latlng;
console.log(keyName,ages);
console.log(lat,lng);