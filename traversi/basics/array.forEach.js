// Always used with a callback function //

// declaring an array to use to the examples bellow
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// common used like this:
socials.forEach(item => console.log(item));

// passing index, item and the full array as a parameter:
socials.forEach((item, index, arr) => console.log(index, item));

// passing a normal function:
function duplicate(item) {
    console.log(item + ' ' + item);
}
socials.forEach(duplicate);

// using with an array of objects
const socialObjs = [
    { name: 'Twiiter', url: 'x.com' },
    { name: 'Facebbok', url: 'facebook.com' },
    { name: 'Linkein', url: 'linkedin.com' },
    { name: 'Instagram', url: 'instagram.com' },
]
socialObjs.forEach(item => console.log(item.url));
