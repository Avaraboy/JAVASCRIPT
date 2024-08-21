//  Array 

let heroes = ["ironman","hulk","spiderman","batman","thor","shaktimaan"];
console.log(heroes);  // output ['ironman', 'hulk', 'spiderman', 'batman', 'thor', 'shaktimaan'] 

let marks = [45,65,84,94,82,76,80,79];
console.log(marks);     // output  [45, 65, 84, 94, 82, 76, 80, 79]
console.log(typeof marks); // output : object 

// Array indices

console.log(heroes[4]);  // output : thor
console.log(heroes[5]);  // output : shaktimaan

// Looping over an array

// for loop
for(let i=0;i<marks.length;i++){
    console.log("marks of student"+i,marks[i]);                
}

// marks of student0 45
// marks of student0 65
// marks of student0 84
// marks of student0 94 ............... print all marks 

// for of loop
for(let hero of heroes){
    console.log(hero);
}

// output it give all the names ironman, hulk, spiderman, batman, thor, shaktiman 1 name in 1 line 