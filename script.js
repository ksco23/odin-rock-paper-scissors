playGame();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const humanSelectBtnContainer = document.querySelector('#userSelection');

    humanSelectBtnContainer.addEventListener('click', humanSelectClickEvt);

    function humanSelectClickEvt(e){
        if(e.target.tagName === 'BUTTON'){
            playRound(e.target.textContent, getComputerChoice());
        }
    }

    function playRound(humanChoice, computerChoice){
        const humanChoiceLowercase = humanChoice.toLowerCase();

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
                    tie(computerChoice, humanChoice);
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
                    tie(computerChoice, humanChoice);
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
                    tie(computerChoice, humanChoice);
                }
                break;

            default:
                console.error('Something went wrong. Computer choice wasn\'t valid!');
        }
    }

    function getComputerChoice(){
        const choices = {
            0: 'rock',
            1: 'paper',
            2: 'scissors'
        };
        return choices[Math.floor(Math.random() * 3)];
    }

    function computerWins(computerChoice, humanChoice){
        computerScore += 1;
        printRoundResult(computerChoice, humanChoice, true);
        printScore();
        if(computerScore >= 5){
            gameOver(true);
        }
    }
    function humanWins(computerChoice, humanChoice){
        humanScore += 1;
        printRoundResult(computerChoice, humanChoice, false);
        printScore();
        if(humanScore >= 5){
            gameOver(false);
        }
    }
    function tie(computerChoice, humanChoice){
        printRoundResult(computerChoice, humanChoice)
        printScore();
    }

    function printScore(){
        const resultsTable = document.querySelector('#resultsContainer').querySelector('table');
        const tr = document.createElement('tr');
        const humanTd = document.createElement('td');
        const computerTd = document.createElement('td');

        humanTd.textContent = humanScore;
        computerTd.textContent = computerScore;

        tr.appendChild(humanTd);
        tr.appendChild(computerTd);
        resultsTable.appendChild(tr);
    }

    function printRoundResult(computerChoice, humanChoice, computerWon){
        let resultsString = 'It was a tie.';

        if(typeof computerWon !== 'undefined'){
            const winner = computerWon ? 'The computer' : 'You';
            const winningChoice = computerWon ? computerChoice : humanChoice;
            const losingChoice = computerWon ? humanChoice : computerChoice;

            resultsString = `${winner} won that round! ${capFirstLetter(winningChoice)} beats ${capFirstLetter(losingChoice)}.`;
        }

        const resultP = document.querySelector('#roundResult');
        resultP.textContent = resultsString;
    }

    function gameOver(computerWon){
        const resultContainer = document.querySelector('#resultsContainer');
        const gameOverP = document.createElement('p');
        const resultsString = computerWon ? 'GAME OVER! Sorry, the computer won.' : 'GAME OVER! YOU WON!'

        gameOverP.textContent = resultsString;
        resultContainer.appendChild(gameOverP);

        humanSelectBtnContainer.removeEventListener('click', humanSelectClickEvt);
    }

    //Make the first letter of a string capitalized
    function capFirstLetter(string){
        return string[0].toUpperCase() + string.slice(1);
    }
}