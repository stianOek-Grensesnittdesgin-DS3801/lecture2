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
    ]
 
    
    let printPerson = () => {
        person.forEach( item => {
            console.log(item.name)
        })
       
    }
    printPerson()


// 7)
// Create a function that takes an array and an element, and returns a new array containing both
let functionSeven = () => {
    let sevenArray = [1, "two", 3];
    
    modifyFunction(...sevenArray)
}
functionSeven()

function modifyFunction(int, string, alsoInt) {
    console.log("First is: ", int);
    console.log("Second is: ", string);
    console.log("Third is: ", alsoInt);
}