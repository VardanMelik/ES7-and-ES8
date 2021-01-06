/* String.prototype.padStart/padEnd

const string = '12345';
console.log(string.padStart(10, 'Hi'));
console.log(string.padEnd(10, 'Hi'));

*/

/* Object.values
const object = {
    name: 'John',
    age: 20,
    favaoriteBook: ['Harry Potter 1, Harry Potter 2'],
}

console.log(Object.values(object));
*/


// Object.entries

const object = {
    name: 'John',
    age: 20,
    favaoriteBook: ['Harry Potter 1, Harry Potter 2'],
}

console.log(Object.entries(object));

// Async functions

// Exponentiation
console.log(Math.pow(2,3));
console.log(2**3);

// Trailing commas
const anotherObject = {
    first: 1,
    second: 2,
    third: 3,
};

const array = [1, , , , , ,3, ,];

console.log(array.length);
console.log(array[3]);