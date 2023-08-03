

// ------- higher order functions ----------
// ------- cb -> callback function ---------

// def-1

function a(fn){          // higher order functions
    console.log("a");
    // console.log(fn);
    fn();                //calling is imp fo cb fn
}

function b(){            // callback function
    console.log("b");
}

// a(20);

a(b);

// --------------------------------

// def-2


// function a(){
//     console.log("a");

//     function b(){
//         console.log("b");
//     }

//     return b;

// }

// let temp = a();

// console.log(temp);









