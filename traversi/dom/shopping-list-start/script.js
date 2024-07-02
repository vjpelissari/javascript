
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
//const listItems = document.querySelectorAll('.item');
//console.log(listItems[0].innerText);

/*
listItems[1].style.color = 'red';

listItems.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 1) {
        item.remove();
    }

    if (index === 0) {
        // item.innerText = 'Orangeass';
        item.innnerHTML = ` Oranges
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>`;
    }
});
*/

/*
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

// if we have an html colletion, and want to go thought it,
// first we have to convert in an array.
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
    console.log(item.innerText);
})
    ;
*/

/*
// GETTING CHILD FROM PARENT
const parent = documento.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child One';

// GETTING PARENT ELEMENT FROM A CHILD
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';

// GETTING SIBLING ELEMENTS
const secondItem = document.querySelector('.child:nth-child(2)');
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'green';
*/

/*
// CREATE ELEMENTS IN DOM
// creating a div
const div = document.createElement('div');
div.className = 'myelement';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// that way isnt good for creating text.
div.innerText = 'Text in div';
// then, create like this:
const text = document.createTextNode('Hello');
div.appendChild(text);

// putting a element into the DOM:
document.body.appendChild(div);
// or:
document.querySelector('ul').appendChild(div);
*/


// Now, let´s creating elements in DOM.
// Firts, in a Quick an Dirty way.
// After, in a Clean & Performant

// Quick & Dirt
/*
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

    document.querySelector('.items').appendChild(li);
}
*/

// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    //console.log(li.innerHTML);
    document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese');