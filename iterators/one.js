// for loop

// for (let index = 0 --> the scope of index is in this block only;
//  index < array.length --> condition check; index++  --> increment operator) {
//     const element = array[index]; --> element is just within the scope of the block only
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index+1;
//     if (element == 5) {
//         console.log("5 is the best no");
//         // continue -> this will help in not letting 5 to be reprinted by next execution statement
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 5 ; i++) {
//     console.log(`Outer loop value ${i}`);
//     //this loop doesnot have j's access
//     for (let j = 1; j <= 10; j++) {
//         //this loop has both ja nd i 's access
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + " = " + i*j);
//     }
// }


let heros = ["flash", "batman","superman"]
for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(element);
}
// if increment operator is not then we will have infinity loop

// important keywords - break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break // control flow will go out of the loop 
    }
    console.log(`value of i is ${index}`)
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue // this will ignore the iteration and execute the rest
    }
    console.log(`value of i is ${index}`)
}
