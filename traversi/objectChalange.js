const library = [

    {title: 'Return of Java', author: 'Josevik Maour', status: {own: true, read: false, reading: false} },
    {title: 'iPhone 15 Guide', author: 'Martan Largan', status: {own: true, read: false, reading: false} },
    {title: 'Flat Earth', author: 'Jubart Henrick', status: {own: true, read: false, reading: false} }

];

library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

const { title: firstBook, author, status } = library[0];

const strJson = JSON.stringify(library);
console.log(strJson);

//console.log (firstBook, author, status);
//console.log (library[2].title);