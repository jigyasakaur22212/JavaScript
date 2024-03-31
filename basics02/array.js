//in js arrays are expandable after creation 

let arr1 = [1,2,3,4,5,6]
let heros = ["Saktiman","jhumri","kaka"]
const arr2 = new Array(1,2,3,4,5)
console.log(arr1);
console.log(arr2);
console.log(heros);

//Array methods

arr2.push(10) // add the value in the array
arr2.push(50) // add the value in the array
console.log(arr2);

arr2.pop() // removes the last element in the array
console.log(arr2);

arr2.unshift(10)
console.log(arr2);
arr2.shift()
console.log(arr2);

console.log(arr2.includes(10));
console.log(arr2.indexOf(3));
console.log(arr2);

const newArr = arr2.join()//converts into an array and combine aswell
console.log(newArr);



console.log("A ",arr2);
const myn = arr2.slice(1,3) // here we are fetching only mentioned element and no chance in the array 

console.log(myn);
console.log("B ",arr2);

const myn2 = arr2.splice(1,3)//this method has taken out the selected elemnts from the array 
console.log("B ",arr2);
console.log(myn2);

