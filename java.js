let computerSelection;
let playerSelection;

function computerPLay() {

    let x = getRandom(3);
    if (x == 1) {
        return 1; //rock
    }
    else if ( x == 2) {
        return 2; //paper
    }
    return 3;//scissor

}

function getRandom(max) {

    return Math.floor(Math.random() * max) + 1;
}   

function round() {
    
    let playerSelection = prompt("Choose Rock , Paper or scissor!Let's play!");
    playerSelection = playerSelection. toLowerCase();
    computerSelection = computerPLay();
    if ((playerSelection == "rock" && computerSelection == 3)|| (playerSelection == "scissor" && computerSelection == 2) || (playerSelection == "paper" && computerSelection == 1)  )

        {
            return 1;
        }
    else if ((playerSelection == "rock" && computerSelection == 2) || (playerSelection == "scissor" && computerSelection == 1)|| (playerSelection == "paper" && computerSelection == 3))
    {
            return 2;
    }
    else 

    return 3;

}
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let winner;

    for (let i = 0; i < 5; i++)
    {
        winner = round();
     
        if (winner == 1)
        {
            playerScore++; 
            console.log("You win the round");
        }
        else if ( winner == 2)
        {
            computerScore++;
            console.log("You Lose the Round");
        }
        else {
            console.log ("It's a tie");
        }
    }
    if ( playerScore > computerScore)
    {
        return "You win";
    }
    else if ( computerScore > playerScore)
        return "You Lose";
    else 
    {
        return "Is a tie";
    }
}

console.log(game());