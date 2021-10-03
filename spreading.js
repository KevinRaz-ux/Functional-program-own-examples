/* Wonderful spread operator can be invoked using ...  */


const product = {
    name: 'Apple',
    quantity: 1
};


const newProduct ={
    ...product,
    quantity: 2
};

console.log(product)
console.log(newProduct)


/* This is done by cloning the object using the spread operator */

const produce ={
    name:'Apple',
    quantity: 1
}

const newProduct = {
    ...product,
    type:'fruit'
};


