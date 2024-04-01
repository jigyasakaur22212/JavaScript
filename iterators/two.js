// while (condition) {
    //here we have to initialize on our own and incrementation also has tp mention to terminate the loop
// }

let index = 0
while (index <= 10) {
    console.log("VAlue of index",index);
    index = index + 2
}

let myArray = ['Flash','batman','superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`Value in array ${myArray[arr]}`);
    arr = arr + 1
}

// do {
    //here the value will be executed first and then it will check the value
// } while (condition);

let score = 11
do {
    console.log(`Score is ${score}`);
    score ++
} while (score <= 10);