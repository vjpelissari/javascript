// Loop through array
const items = ['book', 'table', 'chair', 'kite'];
const users = [{name: 'Brad'}, {name: 'kate'}, {name: 'steve'}];

for (const item of items) {
    console.log(item);
}
for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World!';
for (const letter of str) {
    console.log(letter);
}

// Loop over map
const map = new Map();
map.set('name', 'Jhon');
map.set('age', 30);

for (const [key, value] of map){
    console.log(key, value);
}

// Using For in Loop in objs
const colorObj = {
    color1: 'blue',
    color2: 'red',
    color3: 'white',
}
for (const key in colorObj) {
    console.log(colorObj[key]);
}

// Using For in Loop in arrays
const colorArr = ['black', 'pink', 'purple'];
for (const key in colorArr) {
    console.log(colorArr[key])
}