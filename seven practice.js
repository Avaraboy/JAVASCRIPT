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

countvowels("Dharmendra");   // output The number of vowels present in string is 3

// using arrrow function

const countvowel = (string) =>{for(const c of string){
    if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
        count++;
    }
}
console.log("The number of vowels present in string is",count);
}

countvowel("a");   // output The number of vowels present in string is 1
