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


// get the Player's input
function playerChoice() {
    // prompt the player for a choice
    let getChoice = prompt('Rock, Paper or Scissors?: ');
    // lowercase it, to be case insensitive
    getChoice = getChoice.toLowerCase()
    while (true) { 
        // check if it's a valid choice
        if (['rock', 'paper', 'scissors'].includes(getChoice)) {
        // if so return the answer
        return getChoice;
        } else {
            // alert them if the choice is invalid and show the available choices
            alert('Please type one of the following: rock, paper or scissors');
            // re-prompt the player
            getChoice = prompt('Rock, Paper or Scissors?: ');
        }
    }
}


// play a round
function playRound(player, computer) {
    // add if statements to decide the winner of the round
    
    // rock vs paper
    if (player === 'rock' && computer === 'paper') {
        scoreComputer++;
        alert('AI wins this round, paper beats rock');
    } else if (player === 'paper' && computer === 'rock') {
        scorePlayer++;
        alert('You win this round, paper beats rock');
    }
    
    // rock vs scissors
    if (player === 'scissors' && computer === 'rock') {
        scoreComputer++;
        alert('AI wins this round, rock beats scissors');
    } else if (player === 'rock' && computer === 'scissors') {
        scorePlayer++;
        alert('You win this round, rock beats scissors');
    }

    // paper vs scissors
    if (player === 'paper' && computer === 'scissors') {
        scoreComputer++;
        alert('AI wins this round, scissors beats paper');
    } else if (player === 'scissors' && computer === 'paper') {
        scorePlayer++;
        alert('You win this round, scissors beats paper');
    }

    // Tie
    if (player === computer) {
        alert('It\'s a tie!')
    }
}


// play the game (5 rounds)
function game() {
    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        // declare the player and computer variables
        let player = playerChoice()
        let computer = computerChoice()
        playRound(player, computer);
    }
    // alert the winner if there is one or tie if not
    if (scoreComputer > scorePlayer) {
        alert('AI wins the game!');
        scoreComputer = 0;
        scorePlayer = 0;
    } else if (scorePlayer > scoreComputer) {
        alert('You win! Congratulations!');
        scoreComputer = 0;
        scorePlayer = 0;
    } else {
        alert('It\'s a tie! Great game!');
        scoreComputer = 0;
        scorePlayer = 0;
    }
}

// call the game function to initialize the game
game()