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



// STRING METHODS IN JS

// 1. str.toUpperCase()  use to change the hole string in upper case
let str1 = str.toUpperCase();
console.log(str1);

// 2. str.toLowerCase()  use to change the hole string in lower case
console.log(str1.toLowerCase());

// 3. str.trim()  remove white spaces at the start and at the end
let sp = "        hello     bady    i am back       ";
sp = sp.trim();
console.log(sp);

// 4. str.slice(start,end?)    returns part of string
console.log(str.slice(2,10));
console.log(str.slice(5));

// 5. str1.concat(str2)   join str2 with str1
console.log(str1.concat(sp));
// also use
console.log(str1+sp);

// 6. str.replace(searchVal,newVal) 
let s="hello";
console.log(s.replace("h","y"));
let t="lelololo";
console.log(t.replace("lo","p"));    // it replace only 1st values
console.log(t.replaceAll("lo","p"));    // it replace all values

// 7. strcharAt(index)
console.log(str.charAt(5));