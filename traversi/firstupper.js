const mystring = "mystring";

// Solution 1
//console.log(mystring[0].toUpperCase() + mystring.substring(1, mystring.length));
//console.log(mystring[0].toUpperCase() + mystring.substring(1));

// Solution 2
console.log(`${mystring[0].toUpperCase()}${mystring.substring(1)}`);