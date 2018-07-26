console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
// console.log('Process', process.argv); - No longer needed
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title); // We call a function here using argv.title (title is the name of the function)
} else if (command === 'remove') {
    notes.removeNote(argv.title);
    // console.log('Throwing it under the rug!');
} else {
    console.log('Command not recognized');
}

// Additions to this file were done under the following lesson: 
// Simplified Input With Yargs; Section 3, Lecture 14