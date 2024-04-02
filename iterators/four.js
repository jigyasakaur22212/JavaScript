const programming = ["js","rb","py","java","cpp"]

// const values = programming.forEach((item) => {
//     console.log(item);
//     return item // for each will dont return the value 
// });

// console.log(values); //this way will not work as this loop will not be able to return the values during the loop

//we will use filter

const myNum = [1,2,3,4,5,6,7,8,9]

const newNym = myNum.filter((num)=>num>4)
console.log(newNym);

//when used {} parenthesis we must write the return as we have started the scope of the object

const nNym = myNum.filter((nums) => {
    return nums>4
})
console.log(nNym);

//with for each
const feNym = []

myNum.forEach((num) => {
    if (num > 4) {
        feNym.push(num)
    }
});
console.log(feNym);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk) => bk.genre === "History")
  console.log(userBooks);

userBooks = books.filter((bk)=> {
    return bk.publish >= 2000 && bk.genre == "History"})
console.log(userBooks);

