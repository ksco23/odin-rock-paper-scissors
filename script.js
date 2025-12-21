const log = console.log;

//VARIABLE: humanScore init to 0
//VARIABLE: computerScore init to 0
let humanScore = 0;
let computerScore = 0;

//log(getComputerChoice());
//log(getHumanChoice());
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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
function getHumanChoice(){
    return prompt('Input either rock, paper, or scissors');
}


//FUNCTION: playRound accepts 2 params, humanChoice and computerChoice
    //Convert humanChoice to lowercase
    //Compare humanChoice and computerChoice to determine the round winner (Rock beats scissors, scissors beat paper, and paper beats rock)
    //Log a string declaring the winner ('You lose! Paper beats Rock)
    //Increment humanScore or computerScore based on the round winner

function playRound(humanChoice, computerChoice){
    const humanChoiceLowercase = humanChoice.toLowerCase();

    log(`Computer: ${computerChoice}\nYou: ${humanChoice}`);

    switch(computerChoice){
        case 'rock':
            if(humanChoiceLowercase === 'scissors'){
                //Computer wins
                computerWins(computerChoice, humanChoice);
            }
            else if(humanChoiceLowercase === 'paper'){
                //Human wins
                humanWins(computerChoice, humanChoice);
            }
            else{
                //Draw
                log('It was a draw.');
            }
            break;
        
        case 'paper':
            if(humanChoiceLowercase === 'rock'){
                //Computer wins
                computerWins(computerChoice, humanChoice);
            }
            else if(humanChoiceLowercase === 'scissors'){
                //Human wins
                humanWins(computerChoice, humanChoice);
            }
            else{
                log('It was a draw.');
            }
            break;

        case 'scissors':
            if(humanChoiceLowercase === 'paper'){
                //Computer wins
                computerWins(computerChoice, humanChoice);
            }
            else if(humanChoiceLowercase === 'rock'){
                //Human wins
                humanWins(computerChoice, humanChoice);
            }
            else{
                log('It was a draw.');
            }
            break;

        default:
            log('Something went wrong. Computer choice wasn\'t valid!');
    }
}

function computerWins(computerChoice, humanChoice){
    computerScore += 1;
    log(`You lose! ${capFirstLetter(computerChoice)} beats ${capFirstLetter(humanChoice)}.`);
}
function humanWins(computerChoice, humanChoice){
    humanScore += 1;
    log(`You win! ${capFirstLetter(humanChoice)} beats ${capFirstLetter(computerChoice)}.`);
}

//Make the first letter of a string capitalized
function capFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1);
}

//FUNCTION: playGame
    //Once playRound is working, move its declaration here, as well as the 2 global score variables
    //Play 5 rounds
    //Declare a winner at the end