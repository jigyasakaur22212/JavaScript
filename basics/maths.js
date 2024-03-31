//maths library is there in js by default

console.log(Math);
console.log(Math.E);
console.log(Math.LOG10E);
console.log(Math.abs(-65));
console.log(Math.acosh(180));
console.log(Math.atan(45));
console.log(Math.ceil(6.25));
console.log(Math.floor(2.33));
console.log(Math.min(4,5,1,2,7,5,10));
console.log(Math.max(4,5,1,2,7,5,10));
console.log(Math.random());//gives value b/w 0 and 1
console.log((Math.random(5,10)*10)+1);//random no. above 1
console.log(Math.floor((Math.random(5,10)*10)+1)); // gives us one digit no.
console.log(Math.round(2533.91542));

//one more method to get desired digit b/w any no. 
const min = 10
const max = 20
console.log(`Random no. b/w ${min} and ${max}.`)
console.log(Math.floor(Math.random() * (max -min +1)+min))


//Maths in console
/*
E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
*/