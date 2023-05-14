 function getRandomNumber() {
    return Math.floor(Math.random() * 10) % 3; //the number will be between 0 and 2 because we used modulo 3
  }
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomNumber()];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const result = document.getElementById('result');

    switch(`${playerSelection}-${computerSelection}`) {
      case 'rock-scissors':
      case 'paper-rock':
      case 'scissors-paper':
        result.textContent = 'WIN';
        playerScore++;
        break;
      case 'rock-paper':
      case 'paper-scissors':
      case 'scissors-rock':
        result.textContent = 'LOSS';
        computerScore++;
        break;
      default:
        result.textContent = 'DRAW';
        break;
    }
    
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    
    if (playerScore === 5) {
      result.textContent = 'You win!';
      disableButtons();
    } else if (computerScore === 5) {
      result.textContent = 'Computer wins!';
      disableButtons();
    }
  }
  
  function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelector('#paper');
  const scissorsButton = document.querySelector('#scissors');
  
  rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
  });
  
  paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  });
  
  scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
  });
  