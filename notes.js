// ES6 Syntax utilized

console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title, 
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {}

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        // We have a single item in the array
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }   
}


var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => { 
    // If you do not put 'title' in (), it'll throw an error
    console.log('Getting note', title); // This corresponds to calling the function
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote, 
    getAll,
    getNote, 
    removeNote
};


// Additions to this file were done under the following lesson: 
// Simplified Input With Yargs; Section 3, Lecture 14
