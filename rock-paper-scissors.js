// declare the score variables
scorePlayer = 0;
scoreComputer = 0;


// get a random number from the computer
function computerChoice() {
    // get a random number between 0 and 3
     randomChoice = Math.floor(Math.random() * 30);
     // return the choice based on the number
     if (randomChoice === 0) {
        return 'rock';
     } else if (randomChoice === 1) {
        return 'paper';
     } else {
        return 'scissors';
     }
}