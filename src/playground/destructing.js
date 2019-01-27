const person = {
    name: 'Damian',
    age: 28,
    location: {
        city: 'Wrocław',
        temp: 6
    }
}

const { name = 'anynomous', age } = person;

// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location;

console.log(city, temperature);