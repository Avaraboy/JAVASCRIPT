//  for loop

// for(i=1;i<=4;i++){
//     console.log("Hello Baby");   
// }

// loop for sum of 1 to n

// let sum = 0;
// let n = prompt("enter a valu")
// for(let i=1;i<=n;i++){
//     sum = sum + i;
// }
// console.log("The sum is",sum);

// while loop

// let i=1;
// while (i<=5) {
//     console.log("i=",i);
//     i++;
// }

// Do-while loop

// let i = 1;
// do {
//     console.log("i =",i);
//     i++;
// } while (i<=5);

// for-of loop

// let str="Dharmendra Singh";
// for (let i of str) {
//     console.log("i =",i);
// }

// let str="Dharmendra Singh"; 
// let size=0; // for count
// for (let i of str) {
//     console.log("i =",i);
//     size++;
// }
// console.log(size);

// for-in loop
let student={
    name:"Dharmendra",
    age:20,
    cgpa:6.2,
    ispass:true
};
// for(let i in student){
//     console.log("key=",i);
// }
for(let i in student){
    console.log("key=",i,"vale =",student[i]);
}
