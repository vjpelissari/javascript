// Unlike from array.filter, array.map creates a new array, as array.filter just filter the array

// Double numbers
const array = [1, 2, 3, 4, 5];
const doubledArray = array.map(item => item * 2);
console.log(doubledArray);

// Get only companies names
const companies = [
    { name: 'Company One', category: 'Finanace', start: 1981, end: 2000 },
    { name: 'Company Two', category: 'Retail', start: 1981, end: 2004 },
    { name: 'Company Three', category: 'Tecnology', start: 1981, end: 2009 },
    { name: 'Company Four', category: 'Auto', start: 1981, end: 2014 },
    { name: 'Company Five', category: 'Retail', start: 1981, end: 2022 },
    { name: 'Company Six', category: 'Retail', start: 1981, end: 2024 },
    { name: 'Company Seven', category: 'Finance', start: 1981, end: 2024 },
    { name: 'Company Eight', category: 'Finance', start: 1981, end: 2008 },
]
const onlyCompanyNames = companies.map(item => item.name);
console.log(onlyCompanyNames);

// Get only Name and Category
const onlyCategotyAndName = companies.map(company => {
    return {
        name: company.name,
        category: company.category,
    }
});
console.log(onlyCategotyAndName);

// Create an array of objects with the name and the lenght of each company in years
const lenghOfCompanies = companies.map(company => {
    return {
        name: company.name,
        years: (company.end - company.start) + ' years',
    }
});
console.log(lenghOfCompanies);

// Chain of map
const squareAndDouble = array
    .map(number => Math.sqrt(number))
    .map(number => number * 2);
console.log(squareAndDouble);  