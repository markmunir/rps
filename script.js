function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function getPlayerChoice() {

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock"
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors"
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper covers Rock"
    }
    
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper"
    }
    
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors"
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper"
    } 
}


const playerSelection = "ROck";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
