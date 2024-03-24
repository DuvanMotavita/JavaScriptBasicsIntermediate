const name = "Duvan";
const lastName = "Motavita";

//const fullName = name +' ' +lastName;
const fullName = `${name} ${lastName}`;

console.log(fullName);

function getGreeting(name) {
    return 'Hello ' +name;
}

console.log(`This is a text: ${getGreeting(name)}`)