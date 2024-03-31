"use strict" // treat all js code AS NEWER VERSIONS

//alert(3+3) // this is not used as earlier js was used in embedded form and inside the search engine

// console.log(3+3); console.log("jigyasa")// this way of writing reduces redeability 

//this is better way and clean way
console.log(3+3)

console.log("jigyasa")

let name = "Jigyasa"
let age = 18
let isLonggedIn = false
let state = null

// number => 2 ^ 53
// bigint
//string =>""
// boolean => True and False
// null => standalone value (empty)
//undefined => value is not assigned 
//symbol => find the uniqueness 
//object =>

console.log(typeof age);
console.log(typeof undefined)//undefined 
console.log(typeof null)//object

// data type by value of call- 1. Primitive and 2. Non - primitive
// primitive or reference - 7 types and are call by value
/*
String
Number
Boolean
underfined
null
Symbol
BigInt
*/
const score = 100
const scoreValue = 100.3
const is2LonggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID);

const bignumber = 1213256468487156n//n is use to define BigInt

//Refernce type ( Non primitive)
/*
arrays
Objects
Functions
*/

//Js is dunamically typed or statically typed - dynamically 

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name: "Jigyasa",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World")
}
 
console.log(typeof myFunction);//function object 


