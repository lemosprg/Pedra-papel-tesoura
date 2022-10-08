function getComputerChoice() {

    const options = ["pedra", "papel", "tesoura"];

    let index = Math.floor(Math.random() * 3);

    let choice = options[index];

    return choice;

}

function playRound(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection.toLowerCase() == "pedra") {
        switch (computerSelection.toLowerCase()) {
            case "pedra":
                outcome = "Empate";
                break;
            case "papel":
                outcome = "Voçê Perdeu! Papel envolve Pedra";
                break;
            case "tesoura":
                outcome = "Você Ganhou! Pedra quebra Tesoura";
                break;
        }
    }

    else if (playerSelection.toLowerCase() == "papel") {
        switch (computerSelection.toLowerCase()) {
            case "pedra":
                outcome = "Você Ganhou! Papel envolve Pedra";
                break;
            case "papel":
                outcome = "Empate";
                break;
            case "tesoura":
                outcome = "Voçê Perdeu! Tesoura corta Papel";
                break;
        }
    }

    else {
        switch (computerSelection.toLowerCase()) {
            case "pedra":
                outcome = "Voçê Perdeu! Pedra quebra Tesoura";
                break;
            case "papel":
                outcome = "Você Ganhou! Tesoura corta Papel";
                break;
            case "tesoura":
                outcome = "Empate";
                break;
        }
    }
    return outcome;

}

function playGame(e) {
    playerSelection = e.target.id;
    outcome = playRound(playerSelection, getComputerChoice());
    result.textContent = outcome;

    if (outcome.includes("Win")) {
        playerScore++;
    }
    if (outcome.includes("Lose")) {
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
    
    if (playerScore == 5 || computerScore == 5) {

        buttons.forEach((button) => button.disabled = true)
        startGame.disabled = false;
        startGame.addEventListener('click', reset);

        if (playerScore > computerScore) {
            result.textContent = "Congratulations, you won!!";
        }
        else {
            result.textContent = "Unlucky, you lost";
        }
    }
}

function game() {
    
    startGame.disabled = true;
    buttons.forEach((button) => button.disabled = false);
    buttons.forEach((button) => {
        button.addEventListener('click', playGame);
    });
}

function reset() {

    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";

    buttons.forEach((button) => button.disabled = false);
    startGame.disabled = true;

}

let playerSelection;
var outcome;
let playerScore = 0;
let computerScore = 0;

const startGame = document.getElementById("start");
startGame.addEventListener('click', game);

const playerScoreDisplay = document.getElementById("player");
const computerScoreDisplay = document.getElementById("computer");
const result = document.getElementById("result");

const buttons = document.querySelectorAll('div.button-container > button');
buttons.forEach((button) => button.disabled = true);