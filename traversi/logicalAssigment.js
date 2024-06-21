let a = null; // false => console.log(Boolean(a));
let b = 20;   // true => console.log(Boolean(b));
let c = null;

/* ||= assigns the right side value only if left side is FALSE  */
// 1 - Long Version
if (!a) {
    a = 10;
}
// 2 - A Short Version
a = a || 10;
// 3 A Shorter version
a ||= 10;


/* &&= assigns the right side value only if left side is TRUE */
// 1 - Long Version
if (b) {
    b = 10;
}
// 2 - A Short Version
b = b && 10;
// 3 A Shorter version
a &&= 10;


/* ??= assigns the right side value only if left side is null or undefined */
// 1 - Long Version
if (c === null || c === undefined) {
    c = 20;
}
// 2 - A Short Version
c = c ?? 20;
// 3 - A Shorter Version
c ??= 20

console.log(a);
console.log(b);
console.log(c);