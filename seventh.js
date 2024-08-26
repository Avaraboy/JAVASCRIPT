// Function 

function sum(a,b) {                   // function definition
    s = a+b;
    console.log(s);
    return s;
    console.log("at the end");  // this code not exicuted becouse it is after the return.
}

sum(10,15);


//  Arrrow Function 

const square =(x) =>{
    y=x**2;
    console.log(`The square of ${x} is` ,y);
}

square(9);

// For each loop in Array 
let a=[1,2,3,4,5,6,7,8];
a.forEach((value)=>{
    console.log("The value of array",value);
});

// Map function       almost same work as forEach
let b=[1,2,3,4,5,6];
let newb= b.map((v)=>{
    return v*v;
});
console.log(newb);    // output square of b