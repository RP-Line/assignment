// Task 2
// You are given an array of numbers.
//  Write a function that calculates the total sum and the average of the numbers using the reduce method.

let numbers=[1,2,3,4,5,6,7,8,9];

const numbersSum = numbers.reduce((sum,num)=>{return sum+=num}, 0);
const numbersAvg = numbers.reduce((sum, num)=>{return (sum+=num)}, 0)/numbers.length;

console.log(numbersSum);
console.log(numbersAvg);

// Explanation: we use the reduce method to find the sum and average. and we utilize arrow functions for cleaner code.






// Task 3
// You are given an array of strings, some of which may be duplicates.
// Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.  

let strings =["bird", "water","tent","bird","power","tent"];

const uniqueArr = new Set(strings);
strings=[...uniqueArr];

console.log(strings);

// Explanation: We convert the array into a set and then back. because a set does not allow duplicate elements.
//  therefore this is the quickest way to remove duplicates in what is closest to O(1).
