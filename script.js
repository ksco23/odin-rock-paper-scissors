playGame();

//FUNCTION: playGame
    //Once playRound is working, move its declaration here, as well as the 2 global score variables
    //Play 5 rounds
    //Declare a winner at the end
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const totalRounds = 5;
    let currentRound = 0;

    while(currentRound < totalRounds){
        currentRound++;
        console.log(`Round: ${currentRound}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Score: Computer - ${computerScore}, You - ${humanScore}`);
    }

    if(computerScore > humanScore){
        console.log(`You lose! The computer's score was ${computerScore}, your score was ${humanScore}.`);
    }
    else if(computerScore < humanScore){
        console.log(`You win! Your score was ${humanScore}, the computer's score was ${computerScore}.`);
    }
    else{
        console.log(`It was a draw. Your score was ${humanScore}, the computer's score was ${computerScore}.`);
    }




    //FUNCTION: playRound accepts 2 params, humanChoice and computerChoice
    //Convert humanChoice to lowercase
    //Compare humanChoice and computerChoice to determine the round winner (Rock beats scissors, scissors beat paper, and paper beats rock)
    //Log a string declaring the winner ('You lose! Paper beats Rock)
    //Increment humanScore or computerScore based on the round winner

    function playRound(humanChoice, computerChoice){
        const humanChoiceLowercase = humanChoice.toLowerCase();

        console.log(`Computer: ${computerChoice}\nYou: ${humanChoice}`);

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
                    console.log('It was a draw.');
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
                    console.log('It was a draw.');
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
                    console.log('It was a draw.');
                }
                break;

            default:
                console.log('Something went wrong. Computer choice wasn\'t valid!');
        }
    }

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

    function computerWins(computerChoice, humanChoice){
        computerScore += 1;
        console.log(`You lose! ${capFirstLetter(computerChoice)} beats ${capFirstLetter(humanChoice)}.`);
    }
    function humanWins(computerChoice, humanChoice){
        humanScore += 1;
        console.log(`You win! ${capFirstLetter(humanChoice)} beats ${capFirstLetter(computerChoice)}.`);
    }

    //Make the first letter of a string capitalized
    function capFirstLetter(string){
        return string[0].toUpperCase() + string.slice(1);
    }
}