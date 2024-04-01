/*
JavaScript Execution Context - how JS run the files 
1) Global Execution Context -> all the variables are kept in this 
in console -> window  and in environment -> local 
all these are executed in single thread
2) Funtion/Functional Execution context ->
3) )in mongoDB - Eval Execution Context -> 
it isrun in 2 phase 
    1) Memory Creation Phase / Creation Phase - space is allocated to the variable and other  - first Cycle 
    2) Execution phase - execution is done here -- Second Cycle


eg - through a snippit  --- Execution Phase
snippit 
let val1 = 10
let val2 = 20
funtion addnum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addnum(10,2)


1) Global Execution - this

2) Memory Phase
val1 -> undefined
val2 -> undefined
addnum -> definition
result1 -> undefined 
result2 -> undefined 

3) Execution phase
val1 <- 10
val2 <- 20
                New executional Context 
             ____________________________________
addnum    ->| new variable environment          |
            |           +                       |
            |  Execution Thread                 |
            |___________________________________|
    // here Memory and Execution phase will be done 

    1)Memory Phase
        val1 -> undefined
        val2 -> undefined
        total -> undefined

    2)Executional context 
        num1 <- 10
        num2 <- 20
        total <- 30 //parent execution conted mai return hoga
    //this is deleted after execution 
result <- 30

addnum ->execution context made
result <- 12

//call stacks
- |                   |
  |___________________|
  |                   |
  |___________________|
  |      two          |
  |___________________| //here the values will be added as the call
  |      one          | // will be made inside the funtion for the
  |___________________| // control will be passed in nested loops
  |   global exec.    |
  |___________________|
 // her a concept called LIFO is executed 

 see in sourcce->snippit->see call stack

*/