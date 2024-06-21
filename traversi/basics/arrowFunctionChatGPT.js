/*
Exercise 1: Filtering an Array of Numbers
Write a function that takes an array of numbers and returns a new array containing only the even numbers using arrow functions.
*/
// SOLUTION 1 // 
/*
const onlyEvenNumbers = array => {
    onlyEvenArray = [];
    array.forEach(element => {
        element % 2 == 0 && onlyEvenArray.push(element);
    });
    return onlyEvenArray;
}
*/
// SOLUTION 2 //
// Arrow function with implicit return, that´s why we don´t need return keyword 
/*
const onlyEvenNumbers = array => array.filter(element => element % 2 === 0);
console.log(onlyEvenNumbers([1,2,3,4,5,6,7]));
*/


/* ********************************************************************************************************************************* */
/*
Exercise 2: Summing the Elements of an Array
Create a function that takes an array of numbers and returns the sum of all the numbers in the array using arrow functions.
*/
// SOLUTION 1 //
/*
const sumArray = array => {
    let soma = 0;
    array.forEach(element => {
        soma += element;
    });
    return soma;
}
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));
*/
// SOLUTION 2 //
/*
const sumArray = array => array.reduce((soma, element) => soma + element, 0);
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));
*/

/* ********************************************************************************************************************************* */
/*
Exercise 3: Mapping an Array to Squared Values
Write a function that takes an array of numbers and returns a new array with each number squared using arrow functions.
*/
// SOLUTION 1 //
/*
const squaredNumbers = array => array.map(num => num * num);
console.log(squaredNumbers([1,2,3,4,5,6]));
/*

/* ********************************************************************************************************************************* */
/*
Exercise 4: Filtering an Array of Strings by Length
Write a function that takes an array of strings and a number n and returns a new array containing only the strings that are longer 
than n characters using arrow functions.
*/
// SOLUTION 1//
/*
const filterArrayByLenght = (array, n) => array.filter(element => element.length > n);
console.log(filterArrayByLenght(['house', 'cat', 'function', 'race', 'operator'], 5));
*/

/* ********************************************************************************************************************************* */
/*
Exercise 5: Capitalizing the First Letter of Each String in an Array
Create a function that takes an array of strings and returns a new array with the first letter of each string capitalized 
using arrow functions.
*/
// SOLUTION 1 //
/*
const firstCapitalize = array => array.map(element => element[0].toUpperCase() + element.substring(1));
console.log(firstCapitalize(['house', 'cat', 'function', 'race', 'operator']));
*/

/* ********************************************************************************************************************************* */
/*
Exercise 6: Write a function that takes an array of numbers and returns a new array containing only the prime numbers 
using arrow functions.
*/
// SOLUTION 1 //
/*
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const onlyPrimeNumbers = (array) => array.filter(isPrime);
console.log(onlyPrimeNumbers([1,2,3,4,5,6,7,8,9,10]));
*/

/* Exercice 7: Finding the Maximum Value in an Array */
// SOLUTION 1 //
/*
const max = numbers => numbers.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), numbers[0]);
console.log(max([2, 3, 4, 1, 5, 10, 8, 7]));
*/