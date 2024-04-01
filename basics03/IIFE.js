//Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log("DB Connected");
} // this is also called named IIFE
chai();

//if we want immediate execution  ()()
//() -> first is for definition 
// () -> Second is for the execution 

(function chai2() {
    console.log("DB Connected");
})() ;
//this is done due to pollution in the gobal varibles 

//here we need to keep in mind that the first function needs to be terminated 

( (name) => {
    console.log(`DB Connected TWO ${name}`);
}
)("Jigyasa"); // UNNAMED IIFE
