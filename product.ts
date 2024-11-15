
// Task 4 
// Create a TypeScript interface for a Product

interface Product {
    name: string;
    price:number;
}

let productArray = [
    {name:'apple', price:5},
    {name:'juice', price:10},
    {name:'banana', price:8},
    {name:'tea', price:2},
]

const fullPrice = productArray.reduce((sum, arr)=>{return sum+=arr.price},0);

console.log(fullPrice);

// Explanation: we create an array of Products that is based on the Product interface. and we use the reduce method to find the sum of the prices.
// To transpile typescript into javascript, you must run the command "tsc fileName.ts" or "tsc.cmd fileName.ts" in the terminal.


// Task 5
// Write a TypeScript function that accepts a string and checks if it is a valid email address.

var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmail(email:string){
    if(regex.test(email)){
        return "Email is Valid";
    }
    else{
        return "Email is invalid";
    }
}

let e:string = "name@domain.com";
let e2:string = "not email";

console.log(isEmail(e));
console.log(isEmail(e2));

export {};

// Explanation: we create a regular expression that checks for the name@domain.com format. we create a function with a simple
// if statemend using the .test method that checks if strings fit the regex.
