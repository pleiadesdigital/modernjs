// CHAPTER 2

/* VID 20 BLOCK SCOPE WITH LET / CONST */
// Global Scope
/* var a = 1;
let b = 2;
const c = 3; */

/* function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}
test(); */

// Block Scope
/* if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log();
  console.log("If Scope: ", a, b, c);
} */

/* for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
} */

//console.log("Global Scope: ", a, b, c);



/* VID 19 THE WINDOW OBJECT */

//let val;
// Outer High and Width
/* val = window.outerHeight;
val = window.innerHeight;
val = window.outerWidth;
val = win dow.outerWidth; */

// Scroll Points
//val = window.scrollY;
//val = window.scrollX;

// Location Object

/* val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; */

// Redirect
// window.location.href = 'http://google.com';
// window.location.reload();

// HISTORY OBJECT
//val = window.history.go(-3);
//val = window.history.length;

// Navigation Object
/* val =  window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val); */


// Window Methods / Objects / Properties
// window.console.log(123);
// Alert
// window.alert('Hello world!');
// Prompt
/* const input = prompt();
alert(input); */
// Confirm
/* if (confirm('Are you fucking sure')) {
  console.log('YES!');
} else {
  console.log('NO!');
} */



/* VID 18 General Loops */

// FOR IN LOOP
/* const user = {
  firstName: 'Scarlett',
  lastName: 'Johansson',
  age: 45
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
} */

// MAP (method used to return )
/* const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Scarlett' },
  { id: 3, name: 'Natalia' },
  { id: 4, name: 'Steve' }
];

const ids = users.map(function(user){
  return user.name;
});

console.log(ids); */


// LOOPING THROUGH ARRAYS [FOREACH LOOP]
//const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// OPTION 2
/* cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});
 */
// OPTION 1
/* cars.forEach(car => {
  console.log(car);
}); */
/* cars.forEach(function(car) {
  console.log(car);
}); */


// LOOPING THROUGH ARRAYS [FOR LOOP]
/* const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
} */

// DO WHILE LOOP
/* let i = 0;
do {
  console.log('Testing the fucking thing ' + i);
  i++;
} while (i > 0 && i < 10); */

// WHILE LOOP
/* let i = 0;
while (i < 10) {
  console.log('Number: ' + i);
  i++;
} */

// FOR LOOP
/* for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number!');
    continue;
  }
  if (i === 5) {
    console.log("This is the end of your fucking shit!");
    break;
  }
  console.log("Number: " + i);
} */






/* VID 17 Function Declaration Expressions */

// PROPERTY METHODS
// When a function is put inside an object it is called a 'method'.
/* const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);

  }
}

todo.delete = function (params) {
  console.log('Delete to do...');
}

todo.add();
todo.edit(23);
todo.delete(); */

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// It is a function that you declare and run at the same time.

/* (function () {
  console.log("IFFE Ran...");
})(); */

/* (function (name) {
  console.log(`Hello ${name}.`);
})('Anna'); */

// FUNCTION EXPRESSIONS
// it is basically putting a function as a variable assignment

/* const square = function (x = 3) {
  return x * x;
};
console.log(square()); */


// FUNCTION DECLARATIONS
/* function greet(firstName = 'Jennifer', lastName = 'Lawrence') {
  return `Hello ${firstName} ${lastName}, welcome home!`;
}
console.log(greet()); */


/* VID 16 Switches */
/* const color = '';

switch (color) {
  case 'red':
    console.log("color is red");
    break;

  case 'blue':
    console.log("color is blue");
    break

  case 'yellow':
    console.log("color is yellow");
    break;

  default:
    console.log("color is undefined");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;

  case 1:
    day = 'Monday';
    break;

  case 2:
    day = 'Tuesday';
    break;

  case 3:
    day = 'Wednesday';
    break;

  case 4:
    day = 'Thursday';
    break;

  case 5:
    day = 'Friday';
    break;

  case 6:
    day = 'Saturday';
    break;

  default:
    break;
}

console.log(`Today is ${day}`); */


/* VID 15 If Statements Comparisson Operators */
//const id = '100';

// WITHOUT BRACES
/* if (id === 100)
  console.log("ID is 100");
else
  console.log("Go fuck yourself!"); */

// TERNARY OPERATORS
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// LOGICAL OPERATORS

/* const name = "Steve";
const age = 18;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a kid.`);
} else if (age > 12 && age < 30) {
  console.log(`${name} is a grown up adult.`);
} else {
  console.log(`${name} is an old fart.`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race.`);
} else {
  console.log("You are elegible to run here!");

} */


// IF ELSE
/* const color = 'yellow';
if (color == 'red') {
  console.log("Color is RED");
} else if (color == 'blue') {
  console.log("Color is blue");
} else {
  console.log("There is no fucking color!");

} */

// GREATER OR LESS THAN

/* if (id <= 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
} */

// TEST IF SOMETHING IS UNDEFINED
/* if (typeof(id) !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log("There is no fucking ID.");
} */

/* // EQUAL TO VALUE
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
// NOT EQUAL TO
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// EQUAL TO VALUE AND TYPE
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
// EQUAL TO VALUE AND TYPE
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
} */


/* VID 14 Dates / Times */

/* const today = new Date();
let birthday = new Date('9-10-1981 11:59:00');
birthday = new Date('September 11 1981');
birthday = new Date('9/10/1981');

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate(); // gets the current day
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getTime();

birthday.setMonth(8);
birthday.setDate(13);
birthday.setFullYear(1982);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(46);

console.log(val);
console.log(birthday); */



/* VID 13 Object Literals */

/* const person = {
  firstName: 'Scarlett',
  lastName: 'Johansson',
  age: 36,
  email: 'scarlett@aol.com',
  hobbies: ['paint', 'fashion', 'racquetball'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
}

let val = person;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies['2'];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Jennifer', age: '27' },
  { name: 'Natalia', age: '30' },
  { name: 'Lucia', age: '39' },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name, people[i].age);
} */


/* VID 12 Arrays and array methods */

/* const numbers = [43, 56, 69, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'orange', 'strawberry', 'melon', 'mango'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:3, c:'money'}, new Date()];

let val;
let val2;

// Get array length
val = numbers.length;
// CHeck if is array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(33);
// MUTATING ARRAYS
// add on to end
numbers.push(250);
// add on to front
numbers.unshift(78);
// take off from end
numbers.pop();
// take off from front
numbers.shift();
// splice values
numbers.splice(1, 1);
// reverse array
numbers.reverse();
// concatenate arrays
val = numbers.concat(numbers2);
// sort arrays
val = fruit.sort();
// to sort numbers it is necessary the compare function ascending
/* val2 = numbers.sort(function(x, y){
  return x - y;
}); */
// sorting in reverse order (descending)
/* val2 = numbers.sort(function (x, y) {
  return y - x;
}); */
// find
/*
function under50(num) {
return num > 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);
console.log(val2); */


/* VID 11 Template Literals */

/* const name = "Scarlett";
const age = 32;
const job = "Scort";
const city = "Miami";
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age + '</li><li>Job: ' + job +'</li><li>City:  '  + city +'</li></ul>';

function hello() {
  return 'Can I get a hello there!!';
}

// With template literals
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 * 23}</li>
    <li>${hello()}</li>
    <li>${age <= 28 ? 'WTF !!' : 'Nice fucking age!'}</li>
  </ul>
`;

document.querySelector('.testarea').innerHTML = html; */


/* VID 10 String Methods and Concatenation */

/* const firstName = "Scarlett";
const lastName = "Johansson";
let val;
let age = 45;
let str = 'Hello there my name is Rony';

val = firstName + lastName;

// Concatenation
val  = firstName + " " + lastName;
// Appending
val = 'Brad ';
val += 'Traversy';
val = "Hello, my name is " + firstName + " and my age is " + age + ".";
// Escaping
val = 'That\'s awesome. I can\'t wait';
// Lenght
val = firstName.length;
// concat
val = firstName.concat(' ', lastName);
// to Uppercase
val = firstName.toUpperCase();
val = firstName.toLowerCase();
// get cetain character
val = firstName[0];
// find the "index of"
val = firstName.lastIndexOf('e');
// charAt()
val = firstName.charAt(3);
// get last character
val = firstName.charAt(firstName.length - 1);
// pull a substring out of a string
val = firstName.substr(4, 3);
// slice
val = firstName.slice(0, 4);
// split
val = str.split(' ');
// replace
val = str.replace('Rony', 'Boris');
// includes
val = str.includes('Hello');

console.log(val); */


/* VID 9 The Math Object */
/* const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-45);
val = Math.pow(12, 2);
val = Math.min(12, 5, 76, 2);
val = Math.max(12, 5, 76, 2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val); */



/* VID 8 Type Convertion */

/* let val;
// Number to string
val = String(5);
val = String(4 + 4);
// Boolean to string
val = true;
val = String(true);
// Date to string
val = new Date();
val = String(new Date());
// Array to string
val = [1, 2, 3, 4];
val = String([1, 2, 3, 4]);

// Using the toString method
val = (5).toString();
val = (true).toString();

// Strings to numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 4]);

// Using parseInt
val = parseInt('100.524');
val = parseFloat('100.4');

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof(sum)); */



/* VID 7 Data Types */
// Null -> intentional empty value

// PRIMITIVE TYPES
// Strings
/* const name = 'John Doe';
console.log(typeof name);
// Numbers
const age = 45;
console.log(typeof age);
// Booleans
const hasKids = true;
console.log(typeof hasKids);
// Null
const car = null;
console.log(typeof null);
// Undefined
let test;
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(typeof sym); */

// REFERENCE TYPES - Objects
// Array
/* const hobbies = ['movies', 'music', 'racquetball'];
console.log(typeof hobbies);
// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address);
// Date
const today = new Date();
console.log(today);

console.log(typeof today); */



/* VID 6 Variables */
// LET
/* let name = 'John Doe';
console.log(name);
name = "Scarlett Johansson"; */
// CONST
/* const name = 'Jennifer';
console.log(name);
// name = "Sara"; can't reassign
// const greeting; must be initialized to some kind of value
const person = {
  name: 'Ann',
  age: 29
}
person.name = 'Sara';
person.age = 31;
console.log(person);
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
numbers.pop();
console.log(numbers);
 */

// var (ancient), let (new), const (new)
/* var name = 'John Doe';
console.log(name);
name = "Scarlett Johansson";
console.log(name );

// init a variable
var greeting = "";
console.log(greeting);
greeting = "Hello";
console.log(greeting);
 */
// naming convention:
// letters, numbers, _, $
// cannot start with a number
// multiword: camel case or underscores



/* VID 5 Using the Console */

/* console.clear();
console.log("Hello world!");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({ a: 1, b: 2 });
//errors
console.error('This is some error!');
console.warn("This is a warning!");
console.time('Time');
console.log('HW!');
console.log('HW!');
console.log('HW!');
console.timeEnd('Time') */






