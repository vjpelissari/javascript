// Challeenge 1 - Create other array selecting only name and email from young people, less than 25
/*
const people = [
    { firstName: 'John', lastName: 'Doe', email: 'john@gmail.com', phone: '111-111-1111', age: 30, },
    { firstName: 'Jane', lastName: 'Poe', email: 'jane@gmail.com', phone: '222-222-2222', age: 25, },
    { firstName: 'Bob', lastName: 'Foe', email: 'bob@gmail.com', phone: '333-333-3333', age: 45, },
    { firstName: 'Sara', lastName: 'Soe', email: 'Sara@gmail.com', phone: '444-444-4444', age: 19, },
    { firstName: 'Jose', lastName: 'Koe', email: 'jose@gmail.com', phone: '555-555-5555', age: 23, },
];
const youngOnly = people
    .filter(item => item.age <= 25)
    .map(item => {
        return {
            name: item.firstName + ' ' + item.lastName,
            email: item.email,
        }
    })
console.log(youngOnly);
*/

// Challenge 2 - Sum all positive numbers in an array
/*
const numbers = [2, -30, 50, 20, -12, -9, 7];
const onlyPositives = numbers.reduce((acc, cur) => (cur > 0 ? acc += cur : acc += 0), 0);
console.log(onlyPositives);
*/

// Challenge 3 - Capitalize the first word of an array.
/*
const words = ['coder', 'programmer', 'developer'];
const capitalizeWords = words.map(word => word[0].toUpperCase() + word.slice(1)); // or word.substring(1)
console.log(capitalizeWords);
*/