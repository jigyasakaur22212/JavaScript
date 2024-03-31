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

//******************************part2*********************************

let mv = [1,2,3,4,5]
let dc = [1,2,3,4]

// mv.push(dc)
// console.log(mv);

//let narr =  mv.concat(dc)
// console.log(narr);

let narr = {...mv,...dc}
console.log(narr);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another_array.flat(Infinity)
console.log(real_another);

console.log(Array.isArray("JIgyasa"))
console.log(Array.from("Jigyasa"));
console.log(Array.from({name:"Jigyasa"})); // interesting 

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3));

/*
at
: 
ƒ at()
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.unscopables)
: 
{at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]
: 
Object
*/