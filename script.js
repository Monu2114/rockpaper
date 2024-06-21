const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', () => {
  displayButtons();
});

const buttonNames = ['Rock', 'Paper', 'Scissors'];
const buttons = buttonNames.map(name => {
    const button = document.createElement('button');
    button.textContent = name;
    return button;
});

const displayButtons = () => {
    const container = document.querySelector('#container');
    buttons.forEach(button => {
      container.appendChild(button);
    });
    container.removeChild(playButton);
  };


let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return buttonNames[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
   if(playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
        alert('You win!');
        
    } else if (computerScore === 5) {
        alert('You lose!');
       
    }
      endGame(playerScore, computerScore);
   }
   
};
const endGame = (playerScore,computerScore) => {
    buttons.forEach(button => {
        button.remove();
    });
    computerSelection.remove();
    const playerScoreDisplay = document.createElement('button');
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    const computerScoreDisplay = document.createElement('button');
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    container.appendChild(playerScoreDisplay);
    container.appendChild(computerScoreDisplay);
  
}


const  computerSelection = document.createElement('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.textContent;
   computerSelection.textContent = computerPlay();
     container.appendChild(computerSelection);
    playRound(playerSelection, computerSelection.textContent);
  });
});
