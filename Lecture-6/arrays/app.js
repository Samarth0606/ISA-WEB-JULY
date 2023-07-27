

// let todo = [10 , 20 , 30];

// let todo = [10 , 20 , 30 , true , false , 'sam' , undefined , null];


// let todo = [10 , 20 , 30 , true , [100 , [2000 , 2001 , 2002] , 300] , false , 'sam' , undefined , null];


// console.log(todo[0])
// console.log(todo[0])
// console.log(todo[4]);


// console.log(todo[4[0]]); - > WRONG

// console.log(todo[4](0)); -> wrong

// console.log(todo[4][0]); -> RIGHT

// console.log(todo[4][1]); 

// console.log(todo[4][1][1]); 


// -------------METHODS------------------------

// 1. length

// let todo = [10 , 20 , 30 , true , [100 , [2000 , 2001 , 2002] , 300] , false , 'sam' , undefined , null];

// console.log(todo.length);

// ----------------------------

// 2. push()

// let todo = ['gym' , 'js' , 'system design'];

// console.log(todo);

// todo.push('hackathon');
// console.log(todo);


// todo.push('hackathon' , 'multiple' , 'as many elements as you want');

// console.log(todo);

// ----------------------------
// 3. pop()

// let todo = ['gym' , 'js' , 'system design'];
// console.log(todo);

// todo.pop('system design');

// todo.pop('js');

// todo.pop('');

// todo.pop();

// console.log(todo);


// ---------------------------------

// 4. shift()

// let todo = [10,20,30,40,50,60];

// todo.shift('sam'); //remove

// todo.shift(); //remove

// todo.unshift('sam' , 'vohra' , 'badmaash');

// console.log(todo)


// -------------------------------

// 5. join()

// let todo = [10,20,30,40,50,60];
// todo.join('-->');

// console.log(todo) //-> NOTHING


// -----------CASE 2------------------

// let todo = [10,20,30,40,50,60];
// let ans = todo.join('-->'); //returns a string

// console.log(ans)

// -----------CASE 3------------------

// let todo = [10,20,30,40,50,60];
// let ans = todo.join(); //when nohting is mentioned in join then by default , is used

// console.log(ans)


// ------------------------------------------
// 6. includes()

let todo = ['gym' , 'js' , 'system design'];
console.log(todo.includes('gym')); // t
console.log(todo.includes('sam')); // f
console.log(todo.includes('system')); // f
console.log(todo.includes('system design')); // t




