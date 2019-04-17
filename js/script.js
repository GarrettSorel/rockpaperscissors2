let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll('button');
  btn.forEach((btn) => {
    btn.addEventListener('click', function(e){
      playRound(btn.id, computerPlay())
      updateScore();
    });
  });

//keep score and set initial scores to zero
const score = document.querySelector('#score');
const showPlayerScore = document.createElement('div');
const showComputerScore = document.createElement('div');

showPlayerScore.classList.add('scoreboard');
showComputerScore.classList.add('scoreboard');

showPlayerScore.textContent = 'Your Score: ' + playerScore;
showComputerScore.textContent = 'Computer\'s Score: ' + computerScore;

score.appendChild(showPlayerScore);
score.appendChild(showComputerScore);

//create a new div and append to *results to show the result of the round
const result = document.querySelector('#result');
const showResult = document.createElement('div');
result.parentNode.appendChild(showResult);

//randomly generate the computer's choice
  function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*arr.length);

    return arr[randomNumber];
  }

  function playRound (playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase();

    if (playerLowerCase === computerSelection) {
      showResult.textContent = 'It\'s a tie!';
    } else if  (playerLowerCase == 'rock' && computerSelection == 'scissors') {
       playerScore ++;
       showResult.textContent = "The computer picked scissors. You win!";
    } else if  (playerLowerCase == 'rock' && computerSelection == 'paper') {
        computerScore++;
        showResult.textContent = "The computer picked paper. You lose!";
    } else if (playerLowerCase == 'scissors' && computerSelection == 'paper') {
        playerScore ++;
        showResult.textContent = "The computer picked paper. You win!";
    } else if (playerLowerCase == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        showResult.textContent = "The computer picked rock. You lose!";
    } else if (playerLowerCase == 'paper' && computerSelection == 'rock') {
        playerScore++;
        showResult.textContent = "The computer picked rock. You win!";
    } else {
        computerScore++;
        showResult.textContent = "The computer picked scissors. You lose!";
    }
  }

  function updateScore() {
    showPlayerScore.textContent = 'Your Score: ' + playerScore;
    showComputerScore.textContent = 'Computer\'s Score: ' + computerScore;

    if (playerScore === 5) {
      alert("You win!")
      resetGame();
    } else if (computerScore === 5) {
      alert("You lose!")
      resetGame();
    }
  }

  function resetGame() {
    let playerScore = 0;
    let computerScore = 0;
    showPlayerScore.textContent = 'Your Score: ' + playerScore;
    showComputerScore.textContent = 'Computer\'s Score: ' + computerScore;
    showResult.textContent = "New game."
  }
