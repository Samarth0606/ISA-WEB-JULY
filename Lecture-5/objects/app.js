


// let todo = {
//     // properties -> key: value pair
//     title : "Buy books" ,
//     due : 10,
//     completed : false 
// }

// // console.log(todo);

// console.log(todo.title)
// console.log(todo.due)
// console.log(todo.completed)


// ----------------------------------

// let todo = {
//     title : "Buy books" ,
//     due : 10,
//     completed : false 
// }

// console.log(todo.completed);

// todo.completed = true;

// console.log(todo);
// console.log(todo.completed);


// -----------------------------------


// let todo = {
//     title : "system design by alex-xu" ,
//     due : 10,
//     completed : false 
// }

// console.log(`i am reading a book called ${todo.title}`)

// console.log(todo[title]); //array access -> WRONG

// console.log(todo['title']); //array access -> RIGHT
// console.log(todo['due']); //array access -> RIGHT
// console.log(todo['completed']); //array access -> RIGHT


// -----------------------------------

// let person = {
//     name: "Samarth Vohra",
//     city: "Delhi"
// }

// function describe(obj){
//     console.log(`hi i am ${obj.name} , i belong to ${obj.city}`)
// }


// describe(person);

// ----------------------------------


// let person = {
//     name: "Samarth Vohra",
//     city: "Delhi" ,

//     func : function describe(){
//         console.log(`hi i am ${person.name} , i belong to ${person.city}`)
//     }
// }

// console.log(person.name)
// console.log(person.city)

// // console.log(person.func) //-> WRONG
// console.log(person.func()) //-> RIGHT



// ------------------------------

// let person = {
//     name: "Samarth Vohra",
//     city: "Delhi" ,

//     func : function describe(){
//         return(`hi i am ${person.name} , i belong to ${person.city}`)
//     }
// }

// console.log(person.name)
// console.log(person.city)


// let ans = person.func()
// console.log(ans);


// --------------------------------

// let person = {
//     name: "Samarth Vohra",
//     city: "Delhi" ,

//     func : function(){
        // return(`hi i am ${person.name} , i belong to ${person.city}`)
//     }
// }

let person = {
    name: "Samarth Vohra", //properties -> key : value
    city: "Delhi" ,

    func : function(){  // method -> funcn inside an object
        return(`hi i am ${this.name} , i belong to ${this.city}`)
    }
}

console.log(person.name)
console.log(person.city)


let ans = person.func()
console.log(ans);

// console.log(person);
// console.log(person['name']);

















