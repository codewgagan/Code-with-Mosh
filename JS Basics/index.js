// Variables
let name = "Gagan Gowda";
// console.log(name);
// Rules
// 1. They cannot be reserved
// 2. They should be meaningful and descriptive
// 3. Can't start with a number
// 4. Can't contain space pr hyphen(-)
// 5. Camel notation
// 6. They are case-senitive

// Primitive Types
let animal = "Tiger" //String literal
let age = 21 //Number literal
let isApproved = false // Boolean literal
let oldName; //undefined
let selectedCourse = null //null

// JS is a Dynamic Language
// undefined is a type and also value
// null is a object

// Reference Types
// 1.Object 2.Array 3.Functions
let person = {
    name: "Ramesh",
    age: 45,
    address: {
            Area: "Mumbai",
            Village: "Vashi village"
    }
}
// console.log(person);

// notation in object

// Dot notation
person.name = "Ram"

// Bracket Notation
person['name'] = 'Shyam'
// console.log(person);

// Arrays
// It is a Data structure used to represent the list of items
let myHeros = ['Ram', 'Shyam', 'Shankar', 'Ganesh', 'Hanuman']

console.log(myHeros.length);
console.log(typeof(myHeros)); //object

// Function 
// Function is a fundamental building block of JS it performs a task and used to calculate

function greet(){
    console.log('Jay Hanuman');
}
greet();
// Function can have Parameters and Arguments
function fullName (fname,lname){
    console.log(`Hello ${fname} ${lname}`);
}
fullName("Gagan", "Gowda")

// Function calculates a value
function square(number){
    return number * number;
}
console.log(square(5));
