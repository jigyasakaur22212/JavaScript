console.log(2>1)
console.log(2>=1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2!= 1);


// these different datatype comparison is not prefered as conversion occurs automatically
console.log("2" > 1);
console.log("02" > 1);

console.log("null");
console.log(null>0);
console.log(null == 0);
console.log(null >= 0);//here conversion issue 

/*the reason is that an equality check == and comparison > < >= <= work differently 
comparisons convert null to a number, treating it as 0 ,therefore null >= 0 is true and null > 0 is false 
*/

console.log("UNDEFINED");
console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined < 0)

//strict check === not just check values but also its data types 

console.log("2" === 2);
