//date is an object defined by a single moment and is calculated in mili seconds 

let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let mycreatedate = new Date(2024,0,22) // in js months index is starting from 0
console.log(mycreatedate.toDateString());
let mycreatedate2 = new Date(2023, 0, 12, 5, 30);
console.log(mycreatedate2.toLocaleString());
mycreatedate = Date("2024-11-20")
console.log(mycreatedate.toLocaleString());
mycreatedate = Date("20-11-2024")
console.log(mycreatedate.toLocaleString());

let myTimeStamp = Date.now() //we use in pools and fastest finger first 
console.log(myTimeStamp);
console.log(mycreatedate2.getTime());
//comparison is done in milisecond

console.log(Math.floor(myTimeStamp/1000));//time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getTimezoneOffset());


// `${} and the time is ${}`
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
    //for more options press ctrl+space
}));
