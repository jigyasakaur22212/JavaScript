// //code in a program during conditions not done all together

// //if statements 
// // if (condition --> should be true then we will go the scope) {
//     //will not run if the condition is false
// // } 

// const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log(`YES, Logged in`);
// }
// // operators - <,>,<=,>=,==,!=,=== (check type as well),!==

// if (2 =="2") {
//     console.log(`execute only of true`);
// }
// if (2 !== "2") {
//     console.log(`execute only of true`);
// }

// const temperature = 41
// // if (condition) {
    
// // } else { // exceptional check 
    
// // }

// if (temperature<=50) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// //scope the variables declared within the if or else block have scope inside the block only not outside the if-else block

// // short hand notation of ifelse but it is not prefered

// const balance = 100
// if (balance < 500) console.log("test"),console.log("Test2"); // very unreadeable code

// //nesting

// if (balance < 500) {
//     if (balance % 100 == 0) {
//         console.log(`${balance} is < 500 and divided by 100`);
//     }
// }

// //multiple conditions 
// if (balance < 500) {
//     console.log(`${balance} < 500`);
// }
// else if (balance < 100){
//     console.log(`${balance } is < 100`);
// }
// else {
//     console.log("None");
// }

const isUserLoggedIn = true
const debitCard = true 
const LoggedInFromGoolge = false
const LoggedInFromemail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow the user to purchase course");
}
if (LoggedInFromGoolge || LoggedInFromemail) {
    console.log("User Logged in");
}
