// STRING
let str = "Dharmendra Singh";
console.log(str);
console.log("type",typeof str);
console.log("lenth of string",str.length);
console.log(str[0],str[11]);

let obj = {
        name:"Dharmendra Singh",
        age:20,
        sex:"Male"
};

// if we use normal string concept to print obj so like that 
console.log("The name is",obj.name,"and age",obj.age,"or gender is",obj.sex);

// but when we use the template literals so like
console.log(`The name is ${obj.name} and age ${obj.age} or gender is ${obj.sex}`);