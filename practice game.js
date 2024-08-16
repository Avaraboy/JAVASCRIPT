// Create a game where you pick a random game number. Ask the user to  keep guessing the game number until the user enter correct value.

let gamenum = 22;
let usernum = prompt("Enter two digt number");
while(gamenum != usernum){
    usernum = prompt("You are enter wrong number .Enter again");
}
console.log("you are won the game. number =",gamenum);