// Block 1
// ..........................................................................
// This block needs to be commented out in order for the below conversion to work
// var obj = { 
//     name: 'John'
// };

// var stringObj = JSON.stringify(obj);
// Minimal camel casing
// Taking a string and converting it into an object
// console.log(typeof stringObj);
// console.log(stringObj);

// Taking a string and converting it into an object
// ..........................................................................


// Block 2
// ..........................................................................
// We need to comment this block out for the next block below to work

// var personString = '{"name": "John", "age": 29}';
// Taking a string in '.....blah blah' and converting them into objects. 
// You can use the colon to specify the numerical value

//Now we need to take the string and convert it back into an object
// To do that, we use the opposite of stringify - JSON.parse

// var person = JSON.parse(personString);
// Taking the string we made with the above variable and converts it back into 
// its original form - which could be an array or an object

// console.log(typeof person);
// console.log(person);
// We use nodemon for this in the shell

// Soon, we'll take a string, store it in file, and reading it later on
// Using JSON.parse to read the object
// ..........................................................................

const fs = require('fs');

var originalNote = {
    title: 'Some title', 
    body: 'Some body'
};

// Make a variable originalNoteString

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// Take this string, use a method from above, and convert it back to an object
// Call that variable 'note'

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
















