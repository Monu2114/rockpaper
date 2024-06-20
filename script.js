console.log("Hello, World!")
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    const arr = ['rock', 'paper', 'scissors']
    return arr[randomNumber]
}
let humanScore = 0;
let computerScore = 0;

getHumanChoice=()=>{
   let humanChoice= prompt('Enter your choice: rock, paper, or scissors')
   return humanChoice;
}
playRound=(humanChoice,computerChoice)=>{
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(`Human: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice === computerChoice) {
    } else if (winConditions[humanChoice] === computerChoice) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }

}

playGame=()=>{
    for(let i=0;i<5;i++)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

        }
        if(humanScore>computerScore)
            console.log('You Win')
        else if(humanScore<computerScore)
            console.log('You Lose')
        else
            console.log('It is a tie')
    console.log(`U'r Score: `, humanScore)
    console.log(`Computer's Score: `, computerScore)
}
playGame();