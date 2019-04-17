let playerScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll('button');
  btn.forEach((btn) => {
    btn.addEventListener('click', function(e){
      playRound(btn.id, computerPlay())
      updateScore();
    });
  });

const score = document.querySelector('#score');
const showPlayerScore = document.createElement('div');
const showComputerScore = document.createElement('div');

showPlayerScore.classList.add('scoreboard');
showComputerScore.classList.add('scoreboard');

showPlayerScore.textContent = 'Your Score ' + 0;
showComputerScore.textContent = 'Computer\'s Score ' + 0;

score.appendChild(showPlayerScore);
score.appendChild(showComputerScore);

//randomly generate the computer's choice
  function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*arr.length);

    return arr[randomNumber];
  }

  function playRound (playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase();

    if (playerLowerCase === computerSelection) {
      window.alert("You picked " + playerLowerCase + " and the computer selected " + computerSelection + ". It's a tie!");
    } else if  (playerLowerCase == 'rock' && computerSelection == 'scissors') {
       playerScore ++;
       window.alert("You picked rock and the computer picked scissors. You win!");
    } else if  (playerLowerCase == 'rock' && computerSelection == 'paper') {
        computerScore++;
        window.alert("You picked rock and the computer picked paper. You lose!");
    } else if (playerLowerCase == 'scissors' && computerSelection == 'paper') {
        playerScore ++;
        window.alert("You picked scissors and the computer picked paper. You win!");
    } else if (playerLowerCase == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        window.alert("You picked scissors and the computer picked rock. You lose!");
    } else if (playerLowerCase == 'paper' && computerSelection == 'rock') {
        playerScore++;
        window.alert("You picked paper and the computer picked rock. You win!");
    } else {
        computerScore++;
        window.alert("You picked paper and the computer picked scissors. You lose!");
    }
  }

  function updateScore() {
    showPlayerScore.textContent = 'Your Score ' + playerScore;
    showComputerScore.textContent = 'Computer\'s Score ' + computerScore;
  }
