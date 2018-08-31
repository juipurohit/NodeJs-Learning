console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
var filteredArray = _.uniq(['Jui',1,2,'Jui',3,4,1,5,'jui']);
// var res= notes.addNote();
// console.log(user);
// console.log(res);
console.log(filteredArray);
console.log('Result : ',notes.add(2,-3));
console.log('For abc :',_.isString('abc'));
console.log('For 1 :',_.isString(1));
fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`, function(err){
    if(err){
        console.log('Unable to write file');
    }
});