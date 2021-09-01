// Week 2 oppgaver
// 1)
let a = [1,2];
let b = [1,2];

console.log(a == b) // false 
console.log(a === b) // false

// Explenation

// 2)

/*
function addNumbers(a, b){ return a+b }
Rewrite this as an arrow function
*/

let addNumbers = (a, b) => a + b
addNumbers(1,2)
console.log(addNumbers(1,2))


// 3)
/*
Create an array of cats as JSON objects. Each cat should have name, age, and color.
*/

let cats = [
    {
        "name":"Pie",
        "age":"1",
        "color":"red"
    },
    {
        "name":"De",
        "age":"4",
        "color":"blue"
    },
    {
        "name":"Pew",
        "age":"7",
        "color":"blue"
    }
];

// 4)
// Filter the cat array you have created where the age is over a certain number.

let filterCatsArray = () => {
    cats.filter( item => {
        if(item.age < 6) {
            return item.age;
        }
        console.log(item.age)
        
    })
}
filterCatsArray();

// 5)
// Using map, return only the cat names from the cat array.
let mapCatsArray = () => {
    cats.map( item => {
        console.log(item.name)
    }) 
}
mapCatsArray()

// 6)
// Create a person object, with things like name, age, eye color, etc. Give that object a method that prints the person.

let persons = [
    
    person = [
        {
            id: 1,
            name: "Ollie",
            age: 4,
            eyeColor: "green",
        },
        {
            id: 2,
            name: "Eddi",
            age: 2,
            eyeColor: "blue",
        }
    ],
    occupation = [
        {
            id: 1,
            work: "not currently",
            Interest: "Make my parents rip their hair off",  
        },
        {
            id: 2,
            work: "not currently",
            Interest: "Make my parents rip their hair off",  
        }
    ]
    
]

// 7)

let functionSeven = (persons, callback) => {
    
    console.log(persons.person.name)
}
functionSeven()