const name1 = "Jigyasa"
const repoCount = 50

// console.log(name + repoCount+"Value"); these are not used now as the are outdated methods

//`` - string interpoliation  - we create place holders 

console.log(`HEllo my name is ${name1} and my chapter number is ${repoCount}`);

gameName = new String("Jigyasa")//this creates the string as an object 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5) // start is from 0 and end is 4 not 5 
//if we give negative value it will start from 0
console.log(newString);

const newString2 = gameName.slice(-6,1)//can we use negative value
console.log(newString2);


const newSting3 = "      jigyasa       "
console.log(newSting3);
console.log(newSting3.trim());//use to remove the unncessary white spaces and work only on white spaces removal not other

const newString4 = " jigyasa.c m aaala"
console.log(newSt newString4.replace('a','-'));
console.log(newString4.includes('aaa'));

gameName = "Jihuasa-hi-you-i-am"
console.log(gameName.split("-"));
console.log(gameName.split("-",2));


//to know string methods go to the console and print a string you will be able to see all the methods realated to it 
/*
anchor: ƒ anchor()

at: ƒ at()

big: ƒ big()

blink: ƒ blink()

bold
: 
ƒ bold()

charAt
: 
ƒ charAt()

charCodeAt
: 
ƒ charCodeAt()

codePointAt
: 
ƒ codePointAt()

concat
: 
ƒ concat()

constructor
: 
ƒ String()

endsWith
: 
ƒ endsWith()

fixed
: 
ƒ fixed()

fontcolor
: 
ƒ fontcolor()

fontsize
: 
ƒ fontsize()

includes
: 
ƒ includes()

indexOf
: 
ƒ indexOf()

isWellFormed
: 
ƒ isWellFormed()

italics
: 
ƒ italics()

lastIndexOf
: 
ƒ lastIndexOf()

length
: 
0

link
: 
ƒ link()

localeCompare
: 
ƒ localeCompare()

match
: 
ƒ match()

matchAll
: 
ƒ matchAll()

normalize
: 
ƒ normalize()

padEnd
: 
ƒ padEnd()

padStart
: 
ƒ padStart()

repeat
: 
ƒ repeat()

replace
: 
ƒ replace()

replaceAll
: 
ƒ replaceAll()

search
: 
ƒ search()

slice
: 
ƒ slice()

small
: 
ƒ small()

split
: 
ƒ split()

startsWith
: 
ƒ startsWith()

strike
: 
ƒ strike()

sub
: 
ƒ sub()

substr
: 
ƒ substr()

substring
: 
ƒ substring()

sup
: 
ƒ sup()

length
: 
0

name
: 
"sup"

arguments
: 
(...)

caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]

toLocaleLowerCase
: 
ƒ toLocaleLowerCase()

toLocaleUpperCase
: 
ƒ toLocaleUpperCase()

toLowerCase
: 
ƒ toLowerCase()

toString
: 
ƒ toString()

toUpperCase
: 
ƒ toUpperCase()

toWellFormed
: 
ƒ toWellFormed()

trim
: 
ƒ trim()

trimEnd
: 
ƒ trimEnd()

trimLeft
: 
ƒ trimStart()

trimRight
: 
ƒ trimEnd()

trimStart
: 
ƒ trimStart()

valueOf
: 
ƒ valueOf()

*/
