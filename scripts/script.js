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
        //get user input
        humanChoice = prompt("Enter one of \"rock\", \"paper\", or \"scissors\"");
        
        humanChoice = humanChoice.toLowerCase();
        // //if user output is one of "rock", "paper", or "scissors" after
        // //lowercasing it, return that lowercase. Else, alert that is in an invalid choice
        // if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
        //     return humanChoice;
        // }
        // else {
        //     alert("That is an invalid entry!");
        //     return "";
        // }
        if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")){
            alert("That is an invalid entry!");
            humanChoice = "";
        }
    }
    return humanChoice;
}


function playRound(humanChoice, computerChoice, 
                    humanScore, computerScore) {
    // didHumanWin = false; use to see who wins
    let didHumanWin = false;

    if (humanChoice == computerChoice){
        return 2;
    }

    // if user has rock and comp doesn't have paper, user wins
    if (humanChoice === "rock" && computerChoice != "paper"){
        didHumanWin = true;
    }
    // else if user has paper and comp doesn't have scissors, user wins
    else if (humanChoice === "paper" && computerChoice != "scissors") {
        didHumanWin = true;
    }
    // else if user has scissors and comp doesn't have rock, user wins
    else if (humanChoice === "scissors" && computerChoice != "rock") {
        didHumanWin = true;
    }
    // else comp wins
    else {
        didHumanWin = false;
    }

    return didHumanWin;
}
   

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let didHumanWin = playRound(humanChoice, computerChoice);

        // if human won, then output "You win! {} beats {}", also increment counter;
        if (didHumanWin == 1) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
            humanScore++;
        }
        else if (didHumanWin == 2) {
            console.log(`Tie! ${humanChoice} is the same as ${computerChoice}.`)
            i--;
        }
        // else, output "You lose! {} beats {}" also increment counter;
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore++;
        }
    }

    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
}

playGame();



