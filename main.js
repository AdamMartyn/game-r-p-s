var newGame = document.getElementById('new-game');
var leftRound = document.getElementById('round');
var resultMsg = document.getElementById('result');

var userScore = document.getElementById('user-score');
var computerScore = document.getElementById('computer-score');
var rock = document.getElementById('r');
var paper = document.getElementById('p');
var scissors = document.getElementById('s');


rock.addEventListener('click', function() {
    playerMove('rock');
});
paper.addEventListener('click', function() {
    playerMove(paper);
});
scissors.addEventListener('click', function() {
    playerMove(scissors);
});


var playerMove = function(playerChoice) {
    var com = computerChoice();
    parallel(playerChoice, com);

    if (leftRound === 0) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (userScore > computerScore) {
            document.getElementById('board').classList.add('score-board-green');
        } else if (userScore < computerScore) {
            document.getElementById('board').classList.add('score-board-red');
        }

    }
};
var computerChoice = function() {
    var choice;
    var randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum === 1) {
        choice = 'paper';
    } else if (randomNum === 2) {
        choice = 'stone';
    } else if (randomNum === 3) {
        choice = 'scisssors';
    }
    return choice;
};


var parallel = function(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultMsg.innerHTML = 'it is  draw'
    } else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        resultMsg.innerHTML = 'You won';
        userScore.innerHTML++;
        leftRound.innerHTML--;
    } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'scissors' && computerChoice === 'rock') || (playerChoice === 'paper' && computerChoice === 'scissors')) {
        resultMsg.innerHTML = 'You lost';
        computerScore.innerHTML++;
        leftRound.innerHTML--;
    }
};



var reset = function() {
    leftRound.innerHTML = "";
    resultMsg.innerHTML = "";
    userScore.innerHTML = 0;
    computerScore.innerHtml = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
};



newGame.addEventListener('click', function() {
    reset();
    var numbRound = window.prompt('how many times do you want to play?  -  type number');
    return leftRound.innerHTML = numbRound;
});