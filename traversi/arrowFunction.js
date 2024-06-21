// Arraow Function Sintax:
const add = (a, b) => {
    return a + b;
}

// Implicit return
const subtract = (a, b) => a - b;

// Single parameter can leave off ()
const double = a => a * 2;

// Returning an object. When returning objects, we must put (): ({ object });
const createObj = () => ({
    name: 'Brad',
    age: 43
});


console.log(add(1,2));
console.log(subtract(2,1));
console.log(double(10));