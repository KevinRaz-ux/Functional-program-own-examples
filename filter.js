const numbers = [1, 2, 3, 4,5,6];

function isEven(n) {
    return n % 2 == 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

/* Use npx babel-node filter.js to run

Filter removes items from an array in this case the items are put */

