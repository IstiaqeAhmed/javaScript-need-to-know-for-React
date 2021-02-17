// numbers array

const numbers = [2, 4, 5, 7, 5];

// string array

const friends = ['Rafiq', 'jabbar', 'Barkat'];

// object array
// array of object
const products = [
    {id:1, name: 'laptop', price: 1000},
    {id:2, name: 'phone', price: 700},
    {id:3, name: 'watch', price: 500},
    {id:4, name: 'tablet', price: 800}
]
// map
// return value
// for single line code need not have to write return
const names = products.map(product=>product.name);
// for multiline code write return 
const prices = products.map(product =>{
    // return:product.price;
    return product.price;
})
// console.log(prices);
// console.log(names);

// forEach
// no return
// products.forEach(product=> console.log(product.price));
// products.forEach(product => {
//     console.log(product.name);
// });

// filter
// filter is like as condition 

// const cheaper = products.filter(product => product.price<1000);
// console.log(cheaper);
// remove an item using filter
// const remaining = products.filter(product => product.id != 3);
// console.log(remaining);

// find 
// check particular item present in array

// const hasWatch = products.find(product => product.name === 'watch');
// console.log(hasWatch);

// includes
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array = [1, 2, 3];
console.log(array.includes(4));

// reduce
// ???

const array = [1, 3, 3, 4];

const reducer = (accumula)