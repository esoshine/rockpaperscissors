
//Computer play of randomly selecting between rock, paper, scissors
function computerPlay () {
choices = ['rock', 'paper', 'scissors'];
let computerSelection = choices[Math.floor(Math.random() * choices.length)];
return computerSelection
}

//Player selection from rock, paper, scissors and converting everything to lowercase value for function comparison string standardization
function playerPlay () {
    playerSelection = prompt("What would you like to play? Choose and type one of the following: Rock, Paper, Scissors.",'').toLowerCase()
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    return playerSelection;
    }
    else playerPlay()
}

//game function to execute game. iteration of 5, adding score to winner in each round and announces final winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let step = 0; step < 5; step++) {
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        
        if (playerSelection === computerSelection){
            console.log("Try again, it was a tie!")
        }
        if ( 
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock'||
            playerSelection ==='scissors' && computerSelection === 'paper') {
                console.log("Yay! Great job! You won this round!")
                playerScore++;
            }
        if (
            playerSelection === 'rock' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'scissors'||
            playerSelection === 'scissors' && computerSelection === 'rock') {
                console.log("Sad. You lost this round but it's ok!")
                computerScore++;
            }
            console.log(step)
    }
    return (playerScore > computerScore) ? "Player wins" : "Computer wins"; 
}

