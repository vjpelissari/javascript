/*
Exercise 1: Filtering an Array of Numbers
Write a function that takes an array of numbers and returns a new array containing only the even numbers using arrow functions.
*/
/*  // SOLUTION 1 // 
const onlyEvenNumbers = array => {
    onlyEvenArray = [];
    array.forEach(element => {
        element % 2 == 0 && onlyEvenArray.push(element);
    });
    return onlyEvenArray;
}
*/

/* // SOLUTION 2 //
// Arrow function with implicit return, that´s why we don´t need return keyword 
const onlyEvenNumbers = array => array.filter(element => element % 2 === 0);
console.log(onlyEvenNumbers([1,2,3,4,5,6,7]));
*/


/*
Exercise 2: Summing the Elements of an Array
Create a function that takes an array of numbers and returns the sum of all the numbers in the array using arrow functions.
/*


/*
Exercise 3: Mapping an Array to Squared Values
Write a function that takes an array of numbers and returns a new array with each number squared using arrow functions.
*/