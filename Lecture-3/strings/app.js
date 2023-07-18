

// let firstName = "samarth"; //string
// let lastName = "vohra"; //string

// let fullName = firstName + lastName;  //string concatination
// let fullName = firstName + " " + lastName;  //string concatination

// - , / , * -> these will not concatinate
// let fullName = firstName - " " - lastName;  //string concatination
// let fullName = firstName * " " * lastName;  //string concatination
// let fullName = firstName / " " / lastName;  //string concatination


// console.log(fullName); //printing


// ------------------------------------------

// console.log(' HELLO WORLD ')
// console.log(" HELLO WORLD ")
// console.log(` HELLO WORLD `) //BACKTICKS -> ``


// THESE WILL SHOW DIFFERENCE WHEN YOU WILL WORK WITH SPECIAL CHARACTERS

// let firstName = 'lionel\nmessi';
// let firstName = 'lionel's house'; //wrong
// let firstName = "lionel's house"; //correct

// let firstName = 'lionel\'s house'; //escape character


// console.log(firstName);

// --------------------------------------------

// string template literals

let firstName = 'samarth';
let lastName = 'vohra';

let state = 'delhi';
let favLang = 'JS';

// concatination
let greeting1 =  firstName + ' ' + lastName + ' staying at ' + state + ' ' + 'fav lang is ' + favLang
console.log(greeting1);

// string template literals (useful)->imp
let greeting2 = ` ${firstName} ${lastName} staying at ${state} fav lang is ${favLang} `
console.log(greeting2);
