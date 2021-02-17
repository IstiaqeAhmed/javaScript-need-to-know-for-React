// variable Declare: let, const
//let money = 20;
//money = 12;
//const name = "kurbash";
// create Dynamic value using by template string 

// let isConfident = false;//Boolean
// const person = {
//     name: "pirana chopra",
//     age: 34,
//     city: 'kampala'
// }
//const statement = `His name is ${person.name} with age ${person.age} and he has only ${money} taka`;
// console.log(statement);

//Condition

// let money = 50;
// let age = 45;

// if(money == 20 && age>= 45){
//     console.log("His name is Mr. kungfu Panda");
// }
// else{
//     console.log("His name is Mrs. Zori khatun")
// }

// array
// can be take many things in one variable 

// Build array for numbers
//const numbers = [34, 50, 67, 43];

// Build array for string
//const  respected = ['Motiur Rahman',"Jahangir Alam","Munshi Abdur Rough"];

// Build array for single object or multiple objects

//const products =[{name:'laptop', price: 500}, {name:'mobile', price: 300},{name:'tablet', price: 300},{name:'watch', price: 400}];
// console.log(products);

// loop: for loop

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
// }

// function: regular, arrow
// must be know about return

function add(num1, num2){
    return num1 + num2;
}

const result = add (35, 24);
console.log(result)

// arrow
const fiveTimes = num => num* 5;
const add2 = (num1, num2) => num1 + num2;
const doMath =(x,y)=> {
    const sum = x + y;
    return sum * 2;
}

