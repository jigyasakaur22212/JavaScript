//array specific loops
//for of

// ["","",""]
// [{},{},{}]

const myArray = [1,2,3,4,5]

// for (const iterator of object -> on which thing we are applying) {
    
// }

for (const num of myArray) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//Maps - oreder is maintained and no duplicate values
const map = new Map()
map.set("IN","India")
map.set("USA","united States of America")
map.set("Fr","FRance")
map.set("IN","India")

console.log(map);
//how to put loop 
for (const key of map) {
    console.log(key);
}

for (const [key,values] of map) {
    console.log(key," :- ",values);
}


const myObj = {
    game1:"NFS",
    game2 : "Spiderman"
}

// for (const [key,values] of myObj) {
//     console.log(key," :- ",values);
// } this will not work for objects

//we will use forin loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
const lang = {
    JS : "javaScript",
    CPP : "c++",
    R : "Ruby",
    Swift : "by apple"
}

for (const key in lang) {
    console.log(`key - ${key} :- value - ${lang[key]}`);
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key);// this will print the indexes of the array rather than the values
    console.log(programming[key]);
}

// for (const key in map) {
//     console.log(key); // maps are non iteratable 
// }

//higher order function - they know the length and for back function
// array.forEach(element => {
    
// });

programming.forEach(function (val) {
    console.log(val);
});

//with arrow funtion
programming.forEach((item,index,arr) => {
    console.log(item,index,arr);
});

//with expicit function
function printME(item){
    console.log(item);
}
programming.forEach(printME);


const myCoding = [
    {
        LanguageName : "java",
        LanguageFileName : ".java"
    },
    {
        LanguageName : "python",
        LanguageFileName : ".py"
    },
    {
        LanguageName : "c++",
        LanguageFileName : ".cpp"
    },
    {
        LanguageName : "javaScript",
        LanguageFileName : ".js"
    }
]

myCoding.forEach((item) => {
    console.log(`${item.LanguageName} and ${item.LanguageFileName}`);
});






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