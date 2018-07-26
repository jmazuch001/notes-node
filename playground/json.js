// var obj = {
//     name: 'John'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// Block 1
/////////////////////////////////////////////////////////////
// var personString = '{"name": "John", "age": 29}';
// Take this string and convert back to object

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person); 
/////////////////////////////////////////////////////////////

const fs = require('fs');

var originalNote = {
    title: 'Some title', 
    body: 'Some body'
};
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);