// For a given array marks of student ->[85,97,44,37,76,60]. Find the avarage marks of entire class.

let marks = [85,97,44,37,76,60];
let sum=0;

for(i=0;i<marks.length;i++){
    sum=sum + marks[i];
}

let avarage = sum/marks.length;
console.log(`Avarage marks of the class is ${avarage}`);   

// Output is Avarage marks of the class is 66.5

// creat an array to store companies ->"Bloombery","Microsoft","Uber","Google","IBM","Netflix". a) Remove the first company from the array . b) Remove Uber & Add ola in its place. c) Add Amazon at the end.

let cname = ["Bloombery","Microsoft","Uber","Google","IBM","Netflix"];
cname.shift();
console.log(cname);     // output ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
cname.splice(2,1,"Ola");
console.log(cname);     // output  ['Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix']
cname.push("Amazon");
console.log(cname);     // output  ['Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix', 'Amazon']