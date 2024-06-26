//singleton - only one of its kind  made with constructors 
// object.create


//object literals 
const mysym = Symbol("key1");

const jsuser = {
    name:"Jigyasa",
    "full name":"Jigyasa kaur",
    mysym : "Key 1 new",//this will not be treated as the symbol
    [mysym] : "SymKEy",
    location:"Jaipur",
    age:18,
    isLogged : false,
    email: "jigyasa@google.com",
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// // console.log(jsuser."full name");this will give erroe 
// console.log(jsuser["full name"]);
// console.log(jsuser.mysym);
// console.log(typeof jsuser.mysym);
// console.log(jsuser[mysym]);
// console.log(typeof jsuser[mysym]);

// jsuser.email = "abc@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "jigyasa@google.com"
// console.log(jsuser)
 

jsuser.greeting = function() {
    console.log(`HEllo world,this is ${this.name}`);
}
console.log(jsuser.greeting());

//**************************part2*******************
//wsy of initializing the object
const tinder = new Object() // singletone object
const tinderU = {} // non sigleton object 
tinder.id = "123abc"
tinder.name = "Sammy"
tinder.isLoggedIn = false

console.log(tinder);
console.log(tinderU);

const regularU = {
    email: "someoner@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Jigyasa",
            lastname :"Kaur"
        }
    }
}

console.log(regularU);
console.log(regularU.fullname);
console.log(regularU.fullname.userfullname.firstname);
//option chaining can also be done - when some key dont exist 
console.log(regularU.fullname?.userfullname.firstname);

//merging objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}

const obj3 = {obj1,obj2}//will not produce result as per what we need 
console.log(obj3);
obj4 = Object.assign(obj1,obj2)
console.log(obj4);
obj4 = Object.assign({},obj1,obj2,obj5)//{}optinal parameter for gaureented results and is used as target 
console.log(obj4);

//why we are using the {} emplty object wile merging 
const target = {}
obj4 = Object.assign(target,obj1,obj2,obj5)
console.log(target);
console.log(obj4);
if (target == obj4) {
    console.log(`${target} and ${obj4} are both the same.`);
}

//in real practice we will use spread 
obj4 = {...obj1,...obj2}
console.log(obj4);

let contact = [
    {email:"abs0", phone: 225426},
    {email:"abs1", phone: 225426},
    {email:"abs2", phone: 225426}
]//array has many objects

console.log(contact[1].email); //way of accessing objects in an array 

//fetching the keys from the object and notice that the the output is the array of keys where we can run a loop 
console.log(Object.keys(tinder));
console.log(typeof Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty(isLogged));//this is to check if the property is present in the object or not


//************************part3*********************
//destructuring can be done in arrays as well as arrays 

const course = {
    coursename :"js in hindi",
    price: "999",
    courseInstructor:"jigyasa"
}
//course.courseInstructor /can also use square instruction 

// instead of writing course.courseInstructor every time we can use a pronoun 

const{courseInstructor} = course //this extract the course in courseInstructor and we can use it without dot notation this is called destructuring 
const {courseInstructor: CI} = course  // courseInstructor can be renamed as well

console.log(courseInstructor);
console.log(CI);

// React concept
// const navbar = (props.company) => {
//  // instead of props.company we can also destructure in react by {company}
// }
// navbar(company = :"Jigyasa")


//API's - when we put headache on others head
//earlier it use to return in XML file which were complex but now we use JSON - it is object only
// {
//     "name" : "Jigyasa",
//     "coursename" : "json object making",
//     "price": "free ",
//     // this is an object but sice an object have a name and this block doesnot have a name therefore, the are treated as a json block to make it proper keys will also be in " " and values will also be in  " "
// }
//JSON - javascript object notation whenever we send the data we should send the file in json format 

 //Json can also have arrays
 [
    {},
    {},
    {}
 ]













/*
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
﻿
*/

