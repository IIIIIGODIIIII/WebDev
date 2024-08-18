console.log("Hello, welcome to a console based Rock, Paper, Scissors game!");

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        checkWinner();
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    resultDiv.textContent = resultMessage;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry, you lost the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Human: 0 | Computer: 0`;
}
