const book = {
    title: 'JavaScript Allonge',
    author: 'Reginald Braitwaite',
    category: 'JavaScript'
};

console.log(book);

/* Two ways to access */

console.log(book.title);

console.log(book["title"]);


/* Immuniability is one of the core principles of functional programming. 


The concept Mutation means change. Saying that we changed an object's property is the same as saying we mutated that object. 

*/

let fruit = {
    name: 'Apple'
};

console.log(fruit.name = 'Orange')



/* We changed the fruit object to orange */


const fruits = {
    name: 'Apple'
};

console.log(fruits.name = 'Orange')


const fruites = Object.freeze({
    name:'Apple'
})

fruites.name='Orange'

console.log(fruites.name)