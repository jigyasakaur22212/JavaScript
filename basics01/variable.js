const accId = 144553 // constant variables
let accountEmail = "jigyasa@gmail.com" // only use this for the scope 
var accountPAssword = "12345"//have scope issue 
accountCity = "Delhi"// not a prefered way 
let accountState;

//; is a choice of programmer to add or not 

/*
prefer not to use var for issues in block and funtional scope
*/

console.log(accId)
console.log(accountEmail)
console.log(accountPAssword)
console.log(accountCity)

// {} they are the  block scope 

// accId = 5 // const variable re substitution is not allowed 
accountEmail = "cca@gmail.com"
accountPAssword = "2121212"
accountCity = "Bengaluru"


console.table([accId,accountEmail,accountPAssword,accountCity,accountState])
