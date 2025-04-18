// Declare a new function
// Highlight the three parameters—placeholders for the words we’ll pass in

// Get computer to return 'rock' 'paper' or 'scissors'

function getComputerChoice() {
    //use math.random and multiply by 3 to get a random integer that is either 0, 1, or 2
    let computerChoice = Math.floor(Math.random() * 3);
    //assign 0 to rock
    if (computerChoice === 0) {
        return 'rock';
    //assign 1 to paper
    } else if (computerChoice === 1) {
        return 'paper';
    //assign 2 to scissors
    } else if (computerChoice === 2) {
        return ('scissors')
    }
}

// Delcare a new function for user choice

function getHumanChoice() {
// Prompt and capture the result
    let choice = prompt("Choose: Rock, Paper, or Scissors!");
    choice = choice.toLowerCase();
    return choice;
}

// Declare functions for incrementing score

function incrementHumanScore() {
    humanScore++;
}
function incrementComputerScore() {
    computerScore++;
}

// Declare function to play game

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    // Delcare function to play round
    function playRound(humanChoice, computerChoice) {

        if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
        ) {
          humanScore++;
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === computerChoice) {
          console.log(`It's a tie! You both chose ${humanChoice}`);
        } else {
          computerScore++;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
      }
    
    // Use for loop to play 5 rounds
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score after Round ${i} — You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Final winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

}

// Start the game
playGame();