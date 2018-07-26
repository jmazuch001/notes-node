console.log('Starting app.js');

const fs = require('fs');
// This will tell Node that you want to fetch all of the contents of the 
// fs module and store them in the fs variable
const os = require('os');
// lodash is a node module which we will include in this program
const _ = require('lodash');
const notes = require('./notes.js');


console.log('Result:', notes.add(9, -2));

//var res = notes.addNote();
//console.log(res);

// console.log(_.isString(true));
// console.log(_.isString('john'));

var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);

//var user = os.userInfo();
// os.userInfo can be called without using any arguments


// Next iteration

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
// ES6 feature: use `` operator (called the tick operator)



/////////////////////////////////////////////////////////////////////////
// fs.appendFileSync('greetings.txt', 'Hello World!');
// Form as follows: ('FileName....', 'Text you want to append to the file')
// Original was fs.appendFile and this threw error in terminal
// Changed to fs.appendFileSync and this created the greetings.txt file 