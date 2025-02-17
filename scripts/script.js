

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
    //get user input
    let humanChoice = prompt("Enter one of \"rock\", \"paper\", or \"scissors\"");

    humanChoice = humanChoice.toLowerCase();
    //if user output is one of "rock", "paper", or "scissors" after
    //lowercasing it, return that lowercase. Else, alert that is in an invalid choice
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
        return humanChoice;
    }
    else {
        alert("That is an invalid entry!");
        return "";
    }
}

