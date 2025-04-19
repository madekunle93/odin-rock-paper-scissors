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

// 1) Score state variables
let humanScore = 0;
let computerScore = 0;

// 2) Grab the buttons
const rockBtn     = document.getElementById('rock-button');
const paperBtn    = document.getElementById('paper-button');
const scissorsBtn = document.getElementById('scissors-button');

// 3) Grab the scoreboard spans and results div
const humanScoreEl    = document.getElementById('human-score');
const computerScoreEl = document.getElementById('computer-score');
const resultsDiv      = document.getElementById('results');

// 4) Core round logic
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
  
    let message;
    if (humanChoice === computerChoice) {
      message = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === 'rock'     && computerChoice === 'scissors') ||
      (humanChoice === 'paper'    && computerChoice === 'rock')     ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      message = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      message = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
  
    // show the round result
    const p = document.createElement('p');
    p.textContent = message;
    resultsDiv.appendChild(p);
  
    // update the running scores
    humanScoreEl.textContent   = humanScore;
    computerScoreEl.textContent = computerScore;
  
    // check for first to 5
    if (humanScore === 5 || computerScore === 5) {
      const final = document.createElement('p');
      final.classList.add('final');
      final.textContent = humanScore > computerScore
        ? 'You reached 5 points! You win the game!'
        : 'Computer reached 5 points. You lose the game.';
      resultsDiv.appendChild(final);
  
      // disable buttons so game stops
      [rockBtn, paperBtn, scissorsBtn].forEach(btn => btn.disabled = true);
    }
}
  
// 5) Wire up the buttons
  rockBtn.addEventListener('click',     () => playRound('rock'));
  paperBtn.addEventListener('click',    () => playRound('paper'));
  scissorsBtn.addEventListener('click', () => playRound('scissors'));