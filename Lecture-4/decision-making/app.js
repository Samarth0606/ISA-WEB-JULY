

// if(true) {console.log("it is true")}

// if(false) {console.log('it is false')}

// ------------------------------

// if(true) console.log("it is true")

// if(false) console.log('it is false')


// -------------------------------

// let score = 34;

// if(score >= 33) console.log("india won !")

// if(score >= 33) 
// if(score >= 35) 
// console.log("india won !")



// -----------------------------

// let score = 34;
// if(score >= 35)
//     console.log('congratulation'); //depends on the condition
//     console.log('pass !!'); //stand alone

// ------------------------------

// let score = 34;
// if(score >= 35){ //swarg ka darwaza

//     console.log('congratulation'); 
//     console.log('pass !!'); 

// }

// -----------------------------

// {
//     console.log("line one")
//     console.log("line two")
// }

// ------------------------------
// ---> IF condition --> stand alone condition

// let score = 34;
// if(score >= 33){ 

//     console.log('congratulation'); 
//     console.log('pass !!'); 

// }

//WRONG SYNTAX -> NOT STAND ALONE
// let score = 34;
// else if(score >= 33){ //WRONG

//     console.log('congratulation'); 
//     console.log('pass !!'); 

// }

// let score = 34;
// else{  //WRONG

//     console.log('congratulation'); 
//     console.log('pass !!'); 

// }

// ------------------------------

// let score  = 34;

// if(score >= 32){
//     console.log('congratulation'); 
//     console.log('pass !!'); 
// } 
// else{
//     console.log('hehehe fail hogye');
// }

// ----------------------------

// clubbing->

// let age = 25;//manually enter

// if(age<18){
//     console.log("you are baccha, so go home and sleep")
// }
// else if(age>= 18 && age<25){
//     console.log("welcome");
//     console.log("you are not that big drink milk")
// }
// else{
//     console.log("padhariye shreeman")
//     console.log("btaiye kya leke aau ?")
// }

// -----------------------------------

// let age = prompt("enter your age please !!") //gives string as output
// console.log(age); //string

let age = parseInt( prompt("enter your age please !!") )  //gives string but changed to integer
// console.log(age);

if(age<18){
    console.log("you are baccha, so go home and sleep")
}
else if(age>= 18 && age<25){
    console.log("welcome");
    console.log("you are not that big drink milk")
}
else{
    console.log("padhariye shreeman")
    console.log("btaiye kya leke aau ?")
}

