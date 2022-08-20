// declare the score variables
scorePlayer = 0;
scoreComputer = 0;

// get required elements
const rock = document.getElementById('playerRock');
const paper = document.getElementById('playerPaper');
const scissors = document.getElementById('playerScissors');

// get a random number from the computer
function computerChoice() {
   // get a random number between 0 and 3
    randomChoice = Math.floor(Math.random() * (4 - 1) + 1);
    // return the choice based on the number
    if (randomChoice === 1) {
       return 'rock';
    } else if (randomChoice === 2) {
       return 'scissors';
    } else if (randomChoice === 3) {
       return 'paper';
    }
}

let txt;
function typeWrite() {
   // check for winner before printing an update
   if (scorePlayer === 5) {
      txt = ' CONGRATULATIONS, YOU WIN THE GAME!';
      // reset the score after a game win
      scoreComputer = 0;
      scorePlayer = 0;
      document.getElementById('as').innerHTML = 'AI: ' + scoreComputer;
      document.getElementById('ps').innerHTML = 'Player: ' + scorePlayer;
   } else if (scoreComputer === 5) {
      txt = ' LOL, YOU LOST THE GAME!';
      // reset the score after a game win
      scoreComputer = 0;
      scorePlayer = 0;
      document.getElementById('as').innerHTML = 'AI: ' + scoreComputer;
      document.getElementById('ps').innerHTML = 'Player: ' + scorePlayer;
   }

   let i = 0;
   function typeWriter() {
      if (i < txt.length) {
         document.getElementById('updates').innerHTML += txt.charAt(i);
         i++;
         setTimeout(typeWriter, 30);
      }
   }

   // writing the update on-screen
   typeWriter();
   // empty the update for a new one
   document.getElementById('updates').innerHTML = '';
}

// rock
rock.addEventListener('click', () => {
   // get ai choice
   let aiChoice = computerChoice()
   // check it against the players choice,
   // set update text and type it on-screen
   if (aiChoice === 'rock') {
      txt = " AI also chose rock. It's a tie!"
      typeWrite()
   } else if (aiChoice === 'paper') {
      scoreComputer += 1
      // update the score with every change
      document.getElementById('as').innerHTML = 'AI: ' + scoreComputer
      txt = " AI chose paper. It wins!"
      typeWrite()
   } else {
      scorePlayer += 1
      document.getElementById('ps').innerHTML = 'Player: ' + scorePlayer
      txt = " AI chose scissors. You win!"
      typeWrite()
}});


paper.addEventListener('click', () => {
   let aiChoice = computerChoice();
   if (aiChoice === 'rock') {
      scorePlayer += 1
      document.getElementById('ps').innerHTML = 'Player: ' + scorePlayer
      txt = " AI chose rock. You win!"
      typeWrite()
   } else if (aiChoice === 'paper') {
      txt = " AI also chose paper. It's a tie!"
      typeWrite()
   } else if (aiChoice === 'scissors') {
      scoreComputer += 1
      document.getElementById('as').innerHTML = 'AI: ' + scoreComputer
      txt = " AI chose scissors. It wins!"
      typeWrite()
}});

scissors.addEventListener('click', () => {
   let aiChoice = computerChoice();
   if (aiChoice === 'rock') {
      scoreComputer += 1
      document.getElementById('as').textContent = 'AI: ' + scoreComputer
      txt = " AI chose rock. It wins!"
      typeWrite()
   } else if (aiChoice === 'paper') {
      scorePlayer += 1
      document.getElementById('ps').innerHTML = 'Player: ' + scorePlayer
      txt = " AI chose paper. You win!"
      typeWrite()
   } else {
      txt = " AI also chose scissors. It's a tie!"
      typeWrite()
}});