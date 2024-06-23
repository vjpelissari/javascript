// Parameters: Accumulator(acc), CurrentValue(cur), initialValue

// Total sum
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = array.reduce((acc, cur) => acc + cur, 0);
console.log(soma);

// Total of the cart
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 13 },
    { id: 3, name: 'Product 3', price: 190 },
];
const totalOfTheCart = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalOfTheCart);