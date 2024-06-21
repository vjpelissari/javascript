//Default Parameters
function registerUser (user = 'Bot') {
    return user + ' is register';
}

console.log (registerUser());


//Rest Params
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num
    }
    return total;
}

console.log (sum(1,2));