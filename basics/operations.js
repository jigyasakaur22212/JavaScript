let age = "10abc"
let score = "33"
let temp = null
let test;

console.log(typeof score);
console.log(typeof(age));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber) // here it is returning the NAN value when 

valueInNumber = Number(temp)
console.log(typeof valueInNumber);
console.log(valueInNumber);

valueInNumber = Number(test)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// here conversions are taking place as default and leading to errors in the value during the output 

/*
"33"=> 33
"12asd" => Nan
true = 1,false = 0
*/

let isloggedIn = 1 // on converting get true

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

isloggedIn = "HIte"

booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn); // here we are not giving 1/0 then to o/p is true 

let somenum = 33

let stringnum = String(somenum)
console.log(stringnum);