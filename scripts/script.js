function getComputerChoice() {
    //random generate value between 0 and 1
    let randomNum = Math.random()

    //if value is between 0-0.33, output rock
    //if value is between 0.33-0.67, output paper
    //if value is between 0.67-1, output scissors
    let result = '';
    if (randomNum >= 0 && randomNum < 0.33) {
        result = "rock";
    }
    else if (randomNum < 0.67) {
        result = "paper";
    }
    else {
        result = "scissors";
    }

    return result;
}


function getHumanChoice() {
    let humanChoice = "";
    while(humanChoice == ""){
        humanChoice = prompt("Enter one of \"rock\", \"paper\", or \"scissors\"");
        
        humanChoice = humanChoice.toLowerCase();

        if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")){
            alert("That is an invalid entry!");
            humanChoice = "";
        }
    }
    return humanChoice;
}


function playRound(humanChoice, computerChoice, 
                    humanScore, computerScore) {
    let didHumanWin = false;

    if (humanChoice == computerChoice){
        return 2;
    }

    if (humanChoice === "rock" && computerChoice != "paper"){
        didHumanWin = true;
    }
    else if (humanChoice === "paper" && computerChoice != "scissors") {
        didHumanWin = true;
    }
    else if (humanChoice === "scissors" && computerChoice != "rock") {
        didHumanWin = true;
    }
    else {
        didHumanWin = false;
    }

    return didHumanWin;
}
   
let humanScore = 0;
let computerScore = 0;

function updateScores(didHumanWin, humanChoice, computerChoice) {
    if (didHumanWin == 1) {
        displayOutcome(didHumanWin, humanChoice, computerChoice);
        humanScore++;
    }
    else if (didHumanWin == 2) {
        console.log(`Tie`)
    }
    else {
        computerScore++;
    }

    displayOutcome(didHumanWin, humanChoice, computerChoice);

    if (humanScore >= 5 || computerScore >= 5){
        endGame();
    }
}

function endGame(){
    const container = document.querySelector("#container");

    let matchResultPara = document.createElement('p');
    let matchResult = humanScore > computerScore ? "WINNER!" : "LOSER!";
    matchResultPara.textContent = matchResult;

    container.appendChild(matchResultPara);

    humanScore = 0;
    computerScore = 0;
}

function displayOutcome(didHumanWin, humanChoice, computerChoice) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    let humanChoicePara = document.createElement('p');
    humanChoicePara.textContent = `Your Choice: ${humanChoice}`;

    let computerChoicePara = document.createElement('p');
    computerChoicePara.textContent = `Computer Choice: ${computerChoice}`;

    let resultPara = document.createElement('p');
    let result = "";
    switch (didHumanWin) {
        case false:
            result = `You lose! ${computerChoice} beats ${humanChoice}`
            break;
        case true:
            result = `You win! ${humanChoice} beats ${computerChoice}`
            break;
        case 2:
            result = `Tie! ${humanChoice} is the same as ${computerChoice}.`
            break;
    }
    resultPara.textContent = `Result: ${result}`;

    let currentScoresPara = document.createElement('p');
    currentScoresPara.textContent = `Scores:\nYou - ${humanScore}\nComputer - ${computerScore}`;

    container.appendChild(humanChoicePara);
    container.appendChild(computerChoicePara);
    container.appendChild(resultPara);
    container.appendChild(currentScoresPara);
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    let didHumanWin = playRound("rock", computerChoice);
    updateScores(didHumanWin, "rock", computerChoice);
});

paperButton.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    let didHumanWin = playRound("paper", computerChoice);
    updateScores(didHumanWin, "paper", computerChoice);
});

scissorsButton.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    let didHumanWin = playRound("scissors", computerChoice);
    updateScores(didHumanWin, "scissors", computerChoice);
});



