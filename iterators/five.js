const nums = [1,2,3,4,5,6,7,8,9,10]

newNyms = nums.map((nums) => {return nums +10})

console.log(newNyms);

newNyms = nums
            .map((num) => num * 10) // here we perform the operation
            .map((num) => num + 1)
            .filter((num) => num >= 40)// here we are checking the consition and then returning

console.log(newNyms);

//reduce 

const nn = [1,2,3]

let total = nn.reduce(function (acc,curr) {
    console.log(`acc : ${acc} and current : ${curr}`);
    return acc+curr
},0)

console.log(total);

total = nums.reduce((acc,curr) => acc+curr,0)
console.log(total);


const shoppintCart = [
    {
        itemName : "js course",
        price :2333
    },
    {
        itemName : "mobile dev course",
        price :5999
    },
    {
        itemName : "web dev course",
        price :620
    },
    {
        itemName : "hardware dev course",
        price :544
    }
]

let totalPrice = shoppintCart.reduce((acc,item)=> (acc + item.price),0)
console.log(totalPrice);