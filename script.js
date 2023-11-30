function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function getPlayerChoice() {
    let choice = String(prompt("Rock, paper, or scissors?"))
    return choice
    
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return 0 //"It's a tie!"
    }
    
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return -1 //"You lose! Paper beats Rock"
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return 1 //"You win! Rock beats Scissors"
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return 1 //"You win! Paper covers Rock"
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return -1 //"You lose! Scissors beats paper"
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return -1 //"You lose! Rock beats Scissors"
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 1 //"You win! Scissors beats Paper"
    } 
}

function game() {
    let total = 5;
    let person = 0;
    let computer = total - person;

    for (let i = 0; i < total; i++) {
        person += playRound(getPlayerChoice(), getComputerChoice())
        total += 1
    }

    if (person > computer) {
        return "You win!"
    }
    
    else {
        return "You lose!"
    }
}

console.log(game());
