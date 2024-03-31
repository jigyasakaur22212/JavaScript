// Stack - used in primitive data types and return value i.e. a copy of original value
// Heap - used bt non primitive data types and return reference i.e the change in this value also change original value
let myname = "Jigyasa"
let anotherName = myname

console.log(myname);
console.log(anotherName);

anotherName = "No one"

console.log(myname);
console.log(anotherName);

/*Stack 
____________________________
|                           |
____________________________
|                           |
____________________________ 
|            myname         |
____________________________
|          anotherName      |
____________________________
|        myname             |
____________________________
*/

let userOne = {
    email:"user@gmail.com",
    upi:"23234@als",
}

let userTwo = userOne

console.log(userTwo);
userTwo.email = "AA.gamil.com"

console.log(userOne);//since they point to the same memory space 

/*stack link with heap space and points to the same value 
_________________________             ____________
|         userTwo        | --------->|  email     |
_________________________            |    upi     |
|          userOne       | --------->|____________|
_________________________ 
|            myname      |
_________________________
|          anotherName   |
_________________________
|        myname          |
_________________________
*/