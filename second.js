let a=5;
let b=4;

// Arithmetic operators


console.log("a + b =",a+b);    // a+b= 9
console.log("a - b =",a-b);   // a-b= 1
console.log("a * b =",a*b);    // a*b= 20
console.log("a / b =",a/b);    // a/b= 1.25
console.log("a % b =",a%b);    // a%b= 1  (it give reminder)
console.log("a++ =",a++);    // a++ = a+1 (this is post operator)
console.log("a++ =",a);    // a = 6
console.log("++a =",++a);    // a = 7  (this is pre operator)
console.log("--a =",--a);    // a = 6  (this is pre operator)
console.log("a-- =",a--);    // a = 6  (this is post operat0r)
console.log("a-- =",a);    

// Assignment operators

console.log("a =",a,"& b =",b);  
console.log(" a +=",a += 5);         // a=10
console.log(" a -=",a -= 5);        // a=5
console.log(" a *=",a *= 3);        // a=15
console.log(" a /=",a /= 3);        // a=5
console.log(" a **=",a **= 2);        // a=25

// Comparison operators

console.log("a == b",a==b);    // False
console.log("a != b",a!=b);    // True
console.log("a > b",a>b);    // True
console.log("a >= b",a>=b);    // True
console.log("a < b",a<b);    // False
console.log("a <= b",a<=b);    // False


let d=4;
let j="4";

console.log("d == j",d==j);    // false but they give true
// so we use
console.log("d === j",d===j);    // They compair value and its type also
console.log("d !== j",d!==j);    //True