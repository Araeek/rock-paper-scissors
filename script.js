const buttons = document.querySelectorAll(".move");
let playerChoice;
let computerCoice;
let round = function() {
    playRound(playerChoice,computerCoice);
};
buttons.forEach((btn) => btn.addEventListener("click", playerPlay));
buttons.forEach((btn) => btn.addEventListener("click", computerPlay));
buttons.forEach((btn) => btn.addEventListener("click", round));
buttons.forEach((btn) =>
    btn.addEventListener("transitionend", removeTransition)
);

function playRound(playerSelection, computerSelection) {
    let playerScore = parseInt(
        document.querySelector(".player-score").textContent
    );
    let computerScore = parseInt(
        document.querySelector(".computer-score").textContent
    );

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                computerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            } else if (computerSelection === "scissors") {
                playerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                document.querySelector(".game-status > span").textContent =
                    "I'ts a Tie";
                break;
            }
        case "paper":
            if (computerSelection === "scissors") {
                computerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            } else if (computerSelection === "rock") {
                playerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                document.querySelector(".game-status > span").textContent =
                    "I'ts a Tie";
                break;
            }
        case "scissors":
            if (computerSelection === "rock") {
                computerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            } else if (computerSelection === "rock") {
                playerScore++;
                document.querySelector(
                    ".game-status > span"
                ).textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            } else {
                document.querySelector(".game-status > span").textContent =
                    "I'ts a Tie";
                break;
            }
    }
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;
    if (playerScore === 5 || computerScore === 5) {
        let result;
        if (playerScore > computerScore) {
            result = "Win";
        } else {
            result = "Lose";
        }
        document.querySelector(".result > h4").textContent = `You ${result}!`;
        document.querySelector(".result").classList.remove("hidden");
        buttons.forEach((btn) => btn.removeEventListener("click", playerPlay));
        buttons.forEach((btn) => btn.removeEventListener("click", computerPlay));
        buttons.forEach((btn) => btn.removeEventListener("click", round));
        document
            .querySelector(".result > button")
            .addEventListener("click", () => {
                window.location.reload();
            });
    }
}

function playerPlay() {
    this.classList.add("btn-select");
    let playerMove = this.getAttribute("data-move");
    document
        .querySelector(".player-move > i")
        .classList.remove(
            document.querySelector(".player-move > i").classList[2]
        );
    document
        .querySelector(".player-move > i")
        .classList.add(`fa-hand-${playerMove}`);
    playerChoice = playerMove;
}

function computerPlay() {
    let choise = Math.floor(Math.random() * 3);
    let computerMove;
    switch (choise) {
        case 0:
            computerMove = "rock";
            break;
        case 1:
            computerMove = "paper";
            break;
        case 2:
            computerMove = "scissors";
            break;
    }
    document
        .querySelector(".computer-move > i")
        .classList.remove(
            document.querySelector(".computer-move > i").classList[2]
        );
    document
        .querySelector(".computer-move > i")
        .classList.add(`fa-hand-${computerMove}`);
    computerCoice = computerMove;
}

function removeTransition(e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("btn-select");
}
