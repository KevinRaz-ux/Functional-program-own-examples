/* Reviewing JS primitives */

/* Using the type of Operator you'll be able to find the type of primitive you're dealing with */
console.log(typeof(1));
console.log(typeof(''));
console.log(typeof(true))



/* Now number types which are Number and BigInt */
console.log(0.1 + 0.2);


console.log(0.1 + 0.2 === 0.3);


/* bigInt is used to represent larger numbers. We can create such numbers by appending n to the end of an integer literal. */

console.log(12345678987654321n);


/* Undefined is a type with one value undefined. Null is a type with one value null. Boolean is a type with two values true and false */

/* Immutability: An immutable value is a value that once created cannot be changed. Primitives for example are immutable. When using a method on a string we create a new value. Here is an example of using the trim method that removes white spaces from both sides of a string.  */

' 123 '.trim();


/* Variables: Variables are not values, they store values. We assign values to variables. At this point, variables hold those values. Variables have a name and we can refer the value using the name of the variable. 

We store a value in a variable using the assignment = keyword. Variables can be declared with let, var, or const statements. When we declare a variable without assigning it a value, it has the default value of undefined.

*/

let x; 
console.log(x);

//this will return undefined


/* Dynamic typing only applies when the variable is declared with let or var. This means that  the variable can change at run-time */