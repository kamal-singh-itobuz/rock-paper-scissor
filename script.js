const startButton = document.querySelector('.start');
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const rockPaperScissor = document.querySelector('.rock-paper-scissor');
const whoWin = document.querySelector('.who-win');

const choices = ['rock', 'paper', 'scissor'];

function decide(playerSelect) {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerSelect = choices[randomNumber];
    if ((playerSelect === 'paper' && computerSelect === 'rock') || (playerSelect === 'scissor' && computerSelect === 'paper') || (playerSelect === 'rock' && computerSelect === 'scissor')) {
        playerChoice.innerText = playerSelect;
        computerChoice.innerText = computerSelect;
        playerPoints.innerText = Number(playerPoints.innerText) + 1;
    }
    else if ((computerSelect === 'paper' && playerSelect === 'rock') || (computerSelect === 'scissor' && playerSelect === 'paper') || (computerSelect === 'rock' && playerSelect === 'scissor')) {
        playerChoice.innerText = playerSelect;
        computerChoice.innerText = computerSelect;
        computerPoints.innerText = Number(computerPoints.innerText) + 1;
    }
    else {
        playerChoice.innerText = playerSelect;
        computerChoice.innerText = computerSelect;
    }

    if (Number(computerPoints.innerText) === 5 && Number(playerPoints.innerText) < 5) {
        whoWin.innerText = "Computer Won!!!";
        rockPaperScissor.style.pointerEvents = "none";
        whoWin.style.visibility = "visible";
    }
    else if (Number(playerPoints.innerText) === 5 && Number(computerPoints.innerText) < 5) {
        whoWin.innerText = "Hurrahh! Player Won!!!";
        rockPaperScissor.style.pointerEvents = "none";
        whoWin.style.visibility = "visible";
    }
    else if (Number(playerPoints.innerText) === 5 && Number(computerPoints.innerText) === 5) {
        whoWin.innerText = "Tied";
        rockPaperScissor.style.pointerEvents = "none";
        whoWin.style.visibility = "visible";
    }
}

startButton.addEventListener('click', () => {
    rockPaperScissor.style.pointerEvents = "auto";
    computerPoints.innerText = '0';
    playerPoints.innerText = '0';
    playerChoice.innerText = '---';
    computerChoice.innerText = '---';
    whoWin.style.visibility = "hidden";
});

rockPaperScissor.addEventListener('click', (e) => {
    if (e.target.className === 'rock') {
        decide('rock');
    }
    if (e.target.className === 'paper') {
        decide('paper');
    }
    if (e.target.className === 'scissor') {
        decide('scissor');
    }
});
