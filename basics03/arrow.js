//this - tells about the current context/ scope

const user = {
    username : "Jigyasa",
    price : 99,

    wecomeMessage :function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
user.wecomeMessage()
user.username = "Sam"
user.wecomeMessage()

console.log(this); // -> node environment in console we get window bczthe environment is window not a seperate engine

function chai() {
    // console.log(this);//will bring all the values in the functions 
    /*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
    */
   username = "Jigyasa"
   console.log(this.username);
}
chai()

const chai2 = function(){
    let username = "Jigyasa"
    console.log(this.username);
}
chai2()

//arrow function
const chai3 = ()=>{
    let username = "Jigyasa"
    console.log(this.username);
    console.log(this);
}
chai3()
 
// () => {} syntax
//we can hold in variable
const addTwo = (num1,num2)=>{
    return num1+num2 //explicit return
}
console.log(addTwo(10,15));

//implicit return 
const addTwo2 = (num1,num2) => num1+num2// here we are returning just numbers 
// const addTwo2 = (num1,num2) => (num1+num2)
console.log(addTwo2(50,45));

//when we are returning the object we need () 
const returnObj = () => ({username:"Jigyasa"})
console.log(returnObj(50,41));
 

