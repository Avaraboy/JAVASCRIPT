// Crate a function using the function keyword that takes a string as an argument & return the number of vowels in the string.
let count=0;
function countvowels(str) {
    for(const char of str){
        if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
            count++;
        }
    }
    console.log("The number of vowels present in string is",count);
}

countvowels("DhAarmendra");   // output The number of vowels present in string is 3

// using arrrow function
let coun =0;

const countvowel = (string) =>{for(const c of string){
    if (c==="a"||c==="e"||c==="i"||c==="o"||c==="u") {
        coun++;
    }
}
console.log("The number of vowels present in string is",coun);
}

countvowel("abcd");   // output The number of vowels present in string is 1


// For each loop
let a = [2,3,4,5,6,7,8];
console.log("The square of the array is")
a.forEach((val) => {
    sq=val ** 2;
    console.log(sq);
});