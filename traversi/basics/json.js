const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
};

//Convert to JSON Sctring - Object => JSON
const str = JSON.stringify(post);
console.log(str);

//Parse JSON - JSON => Object
const obj = JSON.parse(str);
console.log(obj);

const book = {
    title: 'Return of Java',
    author: 'Josevik Maour',
    status: {
        own: true,
        read: false,
        reading: false
    }
}