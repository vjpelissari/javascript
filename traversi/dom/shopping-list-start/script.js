
/*
// Selectors
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

// Get/Change Content
const title = document.getElementById('app-title')
console.log(title.textContent);
title.textContent = 'Shopping List';
title.innerText = 'List Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector
console.log(document.querySelector('h1')); // by element
console.log(document.querySelector('#app-title')); // by id
console.log(document.querySelector('.hello')); // by class
console.log(document.querySelector('input[type="text"]')); // by type of element
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// use these methods on ther elements:
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
*/

// querySelectorAll
const listItems = document.querySelectorAll('.item');
console.log(listItems[0].innerText);
