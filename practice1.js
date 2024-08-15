// Q1 Get user to input a number using prompt("Enter a number:"). check if number is a multipule of 5 or not.

// let n=prompt("Enter a number");

// if(n%5===0){
//     console.log(n,"is a multipul of 5");
// }
// else{
//     console.log(n,"is not a multipule of 5");
// }


// Q2 Write a code which can give grades to students according to their scores:  
// 90-100 , A
// 70-89 , B
// 60-69 , C
// 50-59 , D
// 0-49 , Fail


let s = prompt("Enter your score (0-100)");

if (s>=90 && s<=100){
    console.log("You are achieved A grade");
}
else if (s>=70 && s<=89){
    console.log("You are achieved B grade");
}
else if (s>=60 && s<=69){
    console.log("You are achieved C grade");
}
else if (s>=50 && s<=59){
    console.log("You are achieved D grade");
}
else if (s>=0 && s<=49){
    console.log("You are fail");
}
else{
    console.log("Try again and enter right score");
}

