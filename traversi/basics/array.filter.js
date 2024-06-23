// Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlyEven = numbers.filter(number => number % 2 === 0);
console.log(onlyEven);

/*
// Get only retail companies
const companies = [
    { name: 'Company One', category: 'Finanace', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1981, end: 2004 },
    { name: 'Company Three', category: 'Tecnology', start: 1981, end: 2004 },
    { name: 'Company Four', category: 'Auto', start: 1981, end: 2004 },
    { name: 'Company Five', category: 'Retail', start: 1981, end: 2004 },
    { name: 'Company Six', category: 'Retail', start: 1981, end: 2004 },
    { name: 'Company Seven', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Eight', category: 'Finance', start: 1981, end: 2004 },
]
const onlyRetail = companies.filter(item => item.category === 'Retail');
console.log(onlyRetail);
*/