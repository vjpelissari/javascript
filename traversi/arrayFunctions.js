// array.filter
// create a new array, do not alter the original array

// array.reduce
// create a new array, do not alter the original array
// array.reduce(acumulator, current element in the array, function, initial value of acumulator value)
// array.reduce((soma, element) => soma + element, 0);
const sumArray = array => array.reduce((soma, element) => soma + element, 0);
console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));


// array.map
