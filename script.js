const log = console.log;

//VARIABLE: humanScore init to 0
//VARIABLE: computerScore init to 0
let humanScore = 0;
let computerScore = 0;

//log(getComputerChoice());

//FUNCTION: getComputerChoice
    //Randomly return 'rock', 'paper,' or scissors'
function getComputerChoice(){
    const choices = {
        0: 'rock',
        1: 'paper',
        2: 'scissors'
    };
    return choices[Math.floor(Math.random() * 3)];
}


//FUNCTION: getHumanChoice
    //Prompt the user for input, 'rock', 'paper,' or scissors'


//FUNCTION: playRound accepts 2 params, humanChoice and computerChoice
    //Convert humanChoice to lowercase
    //Compare humanChoice and computerChoice to determine the round winner
    //Log a string declaring the winner ('You lose! Paper beats Rock)
    //Increment humanScore or computerScore based on the round winner

//FUNCTION: playGame
    //Once playRound is working, move its declaration here, as well as the 2 global score variables
    //Play 5 rounds
    //Declare a winner at the end
