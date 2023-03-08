function getRandomNumber() {
    return Math.floor(Math.random() * 10) % 3; //the number will be between 0 and 2 because we used modulo 3
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[getRandomNumber()];
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') //win
    return 2
    else if (playerSelection === computerSelection) return 1 //draw
    else return 0 //loss
    }
function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0 ; i<5 ; i++){
        let playerChoice = prompt('choose your weapon');
        let computerChoice = getComputerChoice();
        if (playRound(playerChoice, computerChoice) === 0) {
            computerScore++;
            console.log (`you lose, ${playerChoice} is beaten by ${computerChoice}`)   
        }
        else if (playRound(playerChoice, computerChoice) === 2) {
            playerScore++;
            console.log (`you win ${playerChoice} beats ${computerChoice}`)
        }
        else {
            playerScore += 0.5;
            computerScore += 0.5;
            console.log (`draw, you both chose ${playerChoice}`)
        }
    }
    if (computerScore > playerScore) {
        console.log(`you lost the game ${computerScore} to ${playerScore}`);
    } 
    else if (computerScore < playerScore) {
        console.log(`you won the game ${computerScore} to ${playerScore}`);
    }
    else {
        console.log(`the game is drawn ${computerScore} to ${playerScore}`);
    }

}
game();