/* Functions of course are our primary way to define and encapsulate logic. Functions have a list of parameters and a body of statements. Depending on how the function was created, it may have a name. A function decalation can be created using the function keyword followed by the name of the function and the list of declaration.  */

function sum(x,y){
    return x+y;
}
sum(1,2)

function increment (n, step=1){
    return n + step
}

const n = 1; 
console.log(increment(n));
console.log(increment(n,2))

/* increment now has the function to add 1 to a number. Return also brings back a value but also stops the execution of the function*/


const sum = function(x,y){
    return x+y;
}
/* Function Expressions */
!function start(){
    console.log('start')
}

/* Arrow expressions */

const sum  = (x,y)=> x+y;
sum(1,2);


/* Arity

The arity of a function describes how many parameters the function has.
 A unary function has one parameter
 A binary function has two parameters
 A n-ary function has n parameters
 A nullary function has no parameters

*/

/* Pure functions. In functional programming, functions are like mathematical functions. They do computations. These kinds of functions are called pure functions. 

Pure functions calculate a new value based on the input parameters. They are deterministic functions. That means they return when called with the same input. Pure functions do not modify the external enviroment in which the function was executed, so they do not write into the out enviroment or read data that can change from the outside. 

*/


const number = 1.7654321;

function roundNumber(n,precision = 2){
    const noAsString = n.toFixed(precision);
    return Number.parseFloat(noAsString);
}

console.log(roundNumber(number));


/* roundNumber is a pure function using other pure functions toFixed and parsedFloat, to rounds a number to n decimals. Examples of pure functions are math.min, math.max, math.sqrt and basically all of the maths.  */


