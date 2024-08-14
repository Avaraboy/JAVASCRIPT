// Conditional statement 

// if statement
let age = 18;

if (age >= 18){
    console.log("You are able to vote");       
}


if (age < 18){
    console.log("You are not able to vote");       
}

// if-else statement

let mode = "blue";
let color;

if(mode=="dark"){
    color="black";
}
else{
    color="white"
}

console.log(color);

// else if statement

let ag = 20;

if(ag<18){console.log("you are junior");}
else if(ag>60){console.log("you are senior");}
else{console.log("you are in middle")}


// Ternary Operater ( simple form of if-else)

// let result = ag >= 18 ? "you are adult" : "you are not adult";
// console.log(result);

ag >= 18 ? console.log("you are adult") : console.log("you are not adult");      // both are same but we prefer previous code.