//const and let const is more safety pratcically
//types String, Number, Boolean, null, undefined

/*const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);*/

//Concatenation
/*const name = 'Krzysztof';
const age = 20;
console.log('My name is ' + name + ' and I am ' + age + ' !');
//Template String
console.log(`My name is ${name} and i am ${age}`);
console.log(s.toUpperCase());
console.log(s);
console.log(s.substring(0,5).toUpperCase());
const s = 'Technology, computers, it, code';
console.log(s.split(', '));*/

//Arrays - variables that hold multiple values
/*const fruits = new Array('apples', 'oranges', 'pears', 10, true);
fruits[5] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);*/

//objeccts
/*const person = {
    firstName: 'Krzysztof',
    lastName: 'Szczybelski',
    age: 20,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'aleje Jerozolimskie',
        city: 'Warsaw'
    }
}
// alert(person); bad way

/*console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
//pull out from object
const {firstName, lastName, address: { city } } = person;
console.log(firstName, city);
Adding to object
person.email = 'k.szczybelski@gmail.com';
console.log(person.email);*/
const todos = [
    {
        id: 1,
        text: 'Teke out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with girlfriend',
        isCompleted: true
    },
    {
        id: 3,
        text:  'clean up room',
        isCompleted: false
    }
];
//console.log(todos[1].text);
//const todosJson = JSON.stringify(todos);
//console.log(todosJson);

// For
/*for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
    
}
//while
let i =0;
while (i<=10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}*/
/*for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
    
}
for (let todo of todos){
    console.log(todo.isCompleted);
}*/

// forEach, map, filter
/*todos.forEach(function(todo){
    console.log(todo.text);
});
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text
})


console.log(todoCompleted);

//Conditional 
const x = 10;
if (x==10) {
    console.log('x is 10');
}
const y = '11';
if (y===11) {
    console.log('y is a integer');
}else{
    console.log('y is a string');
}
const z = 4;
const k = 10;
/*if (z === 12) {
    console.log('z is a 12 and integer');
} else if (z > 10) {
    console.log('z is greater than 10');
}
else{
    console.log('z is not a 12 or isnt a number');
}
if (z > 5 || k > 10) { // && AND, || OR
    console.log('z is more than 5 or y is more than 10');   
} else {
    console.log('z is less than 5 or y is less than 10');
}
// Ternary operation ? MEANS IF, : MEANS ELSE   
const x = 9;
//const color = x > 10 ? 'red' : 'blue';
const color = 'green';
//switch
switch (color) {
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}
//Function
function addNumbers(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNumbers(5,5));

//Arrow function
const addNumbers = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumbers(5,5));
const addNumbers = num1 => num1 + 5;
console.log(addNumbers(5));
//Good example
todos.forEach((todo) => console.log(todo));
//Constructors
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);


}
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const person1 = new Person('Krzysztof', 'Szczybelski', '5-28-1999');
const person2 = new Person('Joe', 'Dandy', '4-3-1980');
const person3 = new Person('Mary', 'Smith', '3-4-1971');

console.log(person1.getBirthYear(), person1.getFullName());
//classes
class Person {
    constructor(){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('Krzysztof', 'Szczybelski', '5-28-1999');
const person2 = new Person('Joe', 'Dandy', '4-3-1980');
const person3 = new Person('Mary', 'Smith', '3-4-1971');
//DOM selectors
//single selector
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('h1'));
//Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const btn = document.querySelector('.btn');
btn.style.background = 'red';
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000); 
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : 
        ${emailInput.value}`));

        userList.appendChild(li);

        //Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}