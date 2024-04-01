//{} thay are scopes and objects and functions are scopes in them 
//the variable ans objects andfunctions created in that scope are valid till that only

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log(`inner a ${a}`);
}
console.log(a);
// console.log(b);
// console.log(c);


//nested scopes
function one(){
    const username = "Jigyasa"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//this will give error bcz the scope of website was there only till function two bodynot after that 
    two()

}
one()
//in fuctions a stack is created in the memory 

if (true) {
    const username = "Jigyasa"
    if (true) {
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num+1
}//here we are just defining a function  here we can access before declaration 



// console.log(addTwo(5));//here we cant access before declaration 
const addTwo = function(num){
    return num+2
}//here we are saving the value of function into a variable also called function hoisting 
console.log(addTwo(5));