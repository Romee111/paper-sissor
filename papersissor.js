let playerScore = 0;
let computerScore = 0;

const playerOption = document.querySelectorAll('.option');
const result = document.querySelector('#result');
const userScore = document.querySelector('#user-score');
const computersScore = document.querySelector('#computer-score');

playerOption.forEach(option => {
    option.addEventListener('click', () => {
        const playerid = option.getAttribute('id');
        console.log("clicked,", playerid);
        playerGame(playerid);
    });
});

const draw = () => {
    result.innerHTML = "Game is a draw";
    result.style.backgroundColor = "black";
};

const showWinner = (winner, playerChoice, compSelect) => {
    if (winner) {
        // Player wins
        playerScore++;
        userScore.innerHTML = playerScore;
        result.innerHTML = `Player won! ${playerChoice} beats ${compSelect}`;
        result.style.backgroundColor = "yellow";
    } else {
        // Computer wins
        computerScore++;
        computersScore.innerHTML = computerScore;
        result.innerHTML = `Computer won! ${compSelect} beats ${playerChoice}`;
        result.style.backgroundColor = "red";
    }
};

const playerGame = (playerChoice) => {
    console.log("player", playerChoice);
    
    const compSelect = CompGame();
    console.log("comp", compSelect);

    if (playerChoice === compSelect) {
        draw();
    } else {
        let winner = true;

        if (playerChoice === "rock") {
            winner = compSelect === "scissors" ? true : false;
        } else if (playerChoice === "paper") {
            winner = compSelect === "rock" ? true : false;
        } else if (playerChoice === "scissors") {
            winner = compSelect === "paper" ? true : false;
        }

        showWinner(winner, playerChoice, compSelect);
    }
};

const CompGame = () => {
    const compOption = ['rock', 'paper', 'scissors'];
    const randomPick = Math.floor(Math.random() * 3);
    return compOption[randomPick];
};
