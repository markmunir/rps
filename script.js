function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}