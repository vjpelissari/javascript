// Destrucring Objets
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Jhon',
    },
};

const { id, title, user:{name} } = todo;
console.log (id, title, name); 


// Destruturing Arrays
const numbers = [23, 67, 33, 49, 52];

const [a, b, ...rest] = numbers;

console.log(a, b, rest);