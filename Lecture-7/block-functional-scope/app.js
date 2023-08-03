

// block

// {
//     console.log("hello dosto")
// }

// console.log("hello veero")


// -------------------

// let score  = 50;

// if(score > 33){
//     var x = 20; //globally
// }

// console.log(x);

// -----------------

// let score  = 50;

// function hehe(){
//     var x = 20;
// }

// console.log(x);

// --------------------

// let score  = 50;

// if(score > 33){
//     let x = 20;
// }

// console.log(x);

// -------------------

// let score  = 50;

// function hehe(){
//     const x = 20;
//     let z = 20;
// }

// console.log(x);
// console.log(z);


// ------------------------

// let x = 10;

// {
//     let x = 20;
//     console.log(x); // 20
// }

// console.log(x); //10


// -----------------------

// var x = 10;

// {
//     var x = 20;
//     console.log(x); //20
// }

// console.log(x); //20


// ---------------------

// hoisting

// console.log(a); //undefined
// console.log(b); // you cannot access b varibale before its declaration
// console.log(c); // you cannot access c varibale before its declaration


// var a = 10;
// let b = 20;
// const c = 30;

//yes -> lekin var ke case mei undefined milta hai whereas let & const ke case mei ERROR aata hai i.e you cannot access varibale before its declaration 
//why? (becoz of "dead temporal zone") -> which does not let you access a variable


// function fun(){

//     let a = 10;

//     function inner(){
//         console.log(a);
//         console.log(b);
//     }

    
//     inner();

//     let b = 20
// }

// fun();