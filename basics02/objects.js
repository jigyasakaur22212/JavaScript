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
const tinder = new Object()
const tinderU = {}
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
//option chaining can also be done

//merging objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2}//will not produce result as per what we need 
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);



