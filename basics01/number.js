const  score = 400//normal way of saving a number into a verialbe but here the i/p can be of any type and can accept other values as well
console.log(score);

const balance = new Number(100) // here by defining a variable as the object will help us in ristricting the i/p variable values
console.log(balance);

console.log(typeof balance);
console.log(balance.toString());//this helps in bringing string features in the number 
console.log(typeof balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const anotherNum = 123.54285
console.log(anotherNum.toPrecision(4));//used care fully as it can leads to loss of values if not selected properly

const hundreds  = 100000000000
console.log(hundreds.toLocaleString("en-IN"));//adding commas to the no. for differentiation

//they are also available 
Number.MAX_VALUE
Number.MIN_SAFE_INTEGER






/*
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
*/