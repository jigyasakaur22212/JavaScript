let userEmail = "J@gamil.com"
// userEmail = []
// userEmail = ""
if (userEmail) { // here we are assumin value in string is true 
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

//falsy values
// false,0 , -0 , BigInt 0n,"" , null, undefined,NaN rest are truthy values

//truthy value
//"0",'false'," " ,[] , {} ,function(){} -> empty function

//check an empty array
userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//check for objects
userEmail = {}
if (Object.keys(userEmail).length === 0) {
    console.log("Object is empty");
}

//false == 0 --> true
//false == '' --> true
//0 == '' --> true