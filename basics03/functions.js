// console.log("J");
// console.log("i");
// console.log("g");
// console.log("y");
// console.log("a");
// console.log("s");
// console.log("a");

// console.log();

// function myname() {
//     console.log("J");
//     console.log("i");
//     console.log("g");
//     console.log("y");
//     console.log("a");
//     console.log("s");
//     console.log("a");
// }

// myname // reference
// myname() // execution


// function addTwoNums(number1,number2) {
//     //here humber1 and number2 are parameters
//     console.log(number1+number2);
// }

// // while calling the values input in the funtion are the arguments 
// addTwoNums() // -> returns NAn bcz arguments are not given
// addTwoNums(3,5)
// addTwoNums("4","6") // }    here no type check is being
// addTwoNums(2,"3")   // } -> done and js is doing type 
// addTwoNums("a",6)   // }    conversion on its own

// addTwoNums(3,null)

// //here but since we are print the value of variable we are unable to save the variable outside the function for that we use - return statements and no code will be executed adter that 

// function addTwoNums2(number1,number2) {
//     //here humber1 and number2 are parameters
//     return number1+number2
//     // let result = number1+number2
//     // return result
// }

// let result = addTwoNums2(10,58585)

// console.log(result);

// function loginUSerMsg(username) {
//     return `${username} is just logged in`
// }

// console.log(loginUSerMsg("Jigyasa"));
// console.log(loginUSerMsg()); // undefined will be o/p - for this we will use if else

// console.log();

// function loginUSerMsg2(username) {
//     if (username == undefined) {
//         console.log("Please enter a username");
//         return // execution will stop here
//     }
//     return `${username} is just logged in`
// }

// console.log(loginUSerMsg2("Jigyasa"));
// console.log(loginUSerMsg2()); 

// function loginUSerMsg3(username) {
//     if (!username) { // here undefined is a false value therefore if we put it here then this will never execute - this will work same as before
//         console.log("Please enter a username");
//         return // execution will stop here
//     }
//     return `${username} is just logged in`
// }

// //defaultvalues can also be passed we never want to allow user
// function loginUSerMsg4(username = "samuel") {
//     // this is never o/p undefiend or empty setring value
//     return `${username} is just logged in`
// }


// *********************part2***********************

// here we are handling situations where job cart is being created 
function calculateCartPrice(...nums1) {
    //useing rest operator ... also called spread operator depending on the usecase
    //rest operator can intake any no. of values
    return nums1
    //this will return an array and will combine 
}

console.log(calculateCartPrice(20,100,50,46));

function calculateCartPrice2(number1,number2,...nums1) {
    //useing rest operator ... also called spread operator depending on the usecase
    //rest operator can intake any no. of values
    return nums1
    //this will return an array and will combine 
}

console.log(calculateCartPrice2(100,20,45,2000,63502));

//passing objects in the functions

const user  =  {
    username:"hitesh",
    price : 1252 // if we do prices then o/p for this will be undefined and we need to perform type checking
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObject(user)


//passing arrays in the function 

let arr = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));

console.log(returnSecondValue([200,600,4000]));