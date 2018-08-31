console.log('Inside notes.js');

module.exports.age = 25;

module.exports.addNote = () => {
    console.log('add Node!');
    return 'New Note!'
};

module.exports.add = (a,b) => {
    return a + b;
};