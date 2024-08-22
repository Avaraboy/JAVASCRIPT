// For a given array marks of student ->[85,97,44,37,76,60]. Find the avarage marks of entire class.

let marks = [85,97,44,37,76,60];
let sum=0;

for(i=0;i<marks.length;i++){
    sum=sum + marks[i];
}

let avarage = sum/marks.length;
console.log(`Avarage marks of the class is ${avarage}`);   

// Output is Avarage marks of the class is 66.5