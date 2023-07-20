

// // fucntion definition
// function sheru(){
//     console.log('khana khalo sheru')
// }

// // function calling
// sheru();

// -----------------------

// function sum(){
//     let num1 = 10;
//     let num2 = 30;

//     console.log(num1 + num2);
// }

// // call them as many times as you want
// sum();
// sum();
// sum();
// sum();


// -------------------------
// parameterised functions

// function sum(num2){ //parameter
//     let num1 = 10;
//     let num3 = 30;

//     console.log(num1 + num2 + num3); 
// }

// sum(50); //arguments
// sum(10); //arguments
// sum(20); //arguments

// --------------------------

// function sum(num1 , num3){ //parameter
//     console.log(num1); // UNDEFINED
//     console.log(num3); // UNDEFINED
//     let num2 = 10;

//     console.log(num1 + num2 + num3); //NAN
// }

// sum(10,10); //both arguments //works fine
// sum(); //zero argument -> NAN -> NOT A NUMBER

// ---------------------------

// function sum(num1 , num3){ //parameter
//     console.log(num1); // 10
//     console.log(num3); // undefined
//     let num2 = 10;

//     console.log(num1 + num2 + num3); //NAN
// }

// sum(10,10); //both arguments
// sum(10); //one argument only -> NAN -> NOT A NUMBER


// ----------------------------
// default parameterised functions

// function sum(num1 , num3=20){ //default value paramter
//     console.log(num1); //10
//     console.log(num3);  //20
//     let num2 = 10;

//     console.log(num1 + num2 + num3); 
// }

// sum(10,10); //both arguments
// sum(10); //one argument only 


// ----------------------------
// default parameterised functions

// function sum(num1 , num3=20){ //default value gets override
//     console.log(num1);  //10
//     console.log(num3);  //20(default) but 30(in case of arf=gument provided)
//     let num2 = 10;

//     console.log(num1 + num2 + num3); 
// }

// // sum(10); //both arguments --> //40
// sum(10 , 30); //if you give all the arguments then default value gets override


// ------------------------------

// function sum(){
//     let num1 = 10
//     let num2 = 15
//     let ans = num1+num2  //25

//     return ans //first -> only this
//     return num1 //second
// }

// let final = sum() //25 is returned here
// console.log(final)

// --- or ---

// console.log(sum()); //directly print

// -------------------------------







