const notes = ['Note 1', 'Note 2', 'Note 3'];
const todos = ['Cook food', 'Clean kitchen', 'Do English homework', 'Learn to code javascript', 'Take medicine'];

/* console.log(notes.length);
console.log(notes[notes.length - 1]);

console.log(`I have ${todos.length} todos today`);
console.log(`My first todo is ${todos[0]}.`);
console.log(`My second todo is ${todos[1]}.`);
console.log(`My last todo is ${todos[todos.length - 1]}.`); */

/* todos.forEach(function (todo, index) {
    console.log(`${index + 1}. ${todo.toUpperCase()}`);
}); */

//const selectedColors = ['red', 'green', 'blue', 'yello', 'orange', 'pink'];
/* console.log(typeof selectedColors); // object
console.log(selectedColors.length); */

// Counting... 1
/* for (let count = 0; count <= 10; count++) {
    console.log(`Counting`, count);
}

for (let count = 0; count < selectedColors.length; count++) {
    console.log(`${count + 1}. ${selectedColors[count].toUpperCase()}`);
} */

//console.log(selectedColors.indexOf('red'));

const colors = [{
    text: 'red',
    completed: true
}, {
    text: 'green',
    completed: true
}, {
    text: 'blue',
    completed: true
}, {
    text: 'yello',
    completed: true
}, {
    text: 'orange',
    completed: true
}, {
    text: 'pink',
    completed: true
}];

const deleteColor = function (colors, colorText) {
    // find the existing color in array
    let index = colors.findIndex(function (color) {
        //console.log(color.text.toLowerCase() === colorText.toLowerCase());
        console.log(color);
    });

};

const sortColor = function (colors) {
    colors.sort(function (a, b) {
        //console.log(a.text.toLowerCase());
        //console.log(b.text.toLowerCase());
        console.log(c);
    });
};
//deleteColor(colors, 'red');
sortColor(colors);

//console.log('A' < 'a');
