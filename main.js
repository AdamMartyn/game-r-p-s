'use strict'

var newGame = document.getElementById('new-game');
var leftRound = document.getElementById('round');
var resultMsg = document.getElementById('result');

var userScore = document.getElementById('user-score');
var computerScore = document.getElementById('computer-score');
var rock = document.getElementById('r');
var paper = document.getElementById('p');
var scissors = document.getElementById('s');
var countRound = document.getElementById('round-count');
var numbRound;
var computerPoints = 0;
var userPoints = 0;



rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;

rock.addEventListener('click', function() {
    playerMove('rock');
});
paper.addEventListener('click', function() {
    playerMove('paper');
});
scissors.addEventListener('click', function() {
    playerMove('scissors');
});




var playerMove = function(playerChoice) {
    var com = computerChoice();
    parallel(playerChoice, com);

    /*if (numbRound === 0 && userScore > computerScore) {
        document.getElementById('board').classList.add('score-board-green');
    } else if (numbRound === 0 && userScore < computerScore) {
          document.getElementById('board').classList.add('score-board-red');
    }*/
};

var computerChoice = function() {
    var randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {
        randomNum = 'paper';
    } else if (randomNum === 2) {
        randomNum = 'rock';
    } else if (randomNum === 3) {
        randomNum = 'scissors';
    }
    return randomNum;
};


var parallel = function(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultMsg.innerHTML = 'it is  draw'
    } else if ((playerChoice === 'paper') && (computerChoice === 'rock') || ((playerChoice === 'rock') && (computerChoice === 'scissors')) || ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
        userPoints++;
        resultMsg.innerHTML = 'You won';
        userScore.innerHTML = userPoints;
        countRound.innerHTML++;
        leftRound.innerHTML = --numbRound;
    } else if ((computerChoice === 'paper') && (playerChoice === 'rock') || ((computerChoice === 'rock') && (playerChoice === 'scissors')) || ((computerChoice === 'scissors') && (playerChoice === 'paper'))) {
        computerPoints++;
        resultMsg.innerHTML = 'You lost';
        computerScore.innerHTML = computerPoints;
        countRound.innerHTML++;
        leftRound.innerHTML = --numbRound;
    }

    if (numbRound === 0) {
        leftRound.innerHTML = 'THE END';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (userPoints > computerPoints) {
            //leftRound.insertAdjacentHTML('beforeend', 'UUUU');
            document.getElementById('user-label').classList.add('score-board-green');
        } else {
            document.getElementById('comuter-label').classList.add('score-board-green');
        }
    }

};



var reset = function() {
    leftRound.innerHTML = 'number of rounds! Cilick button again!'
    resultMsg.innerHTML = 'start game' + '<br>';
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    countRound.innerHTML = 0;
    userPoints = 0;
    computerPoints = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
};



newGame.addEventListener('click', function() {
    reset();
    numbRound = window.prompt('how many times do you want to play?  - enter a number greater than zero');
    if (isNaN(numbRound) || (numbRound === '') || (numbRound === null) || (numbRound === '-1') || (numbRound < 1)) {
        resultMsg.innerHTML = 'Just type number remember!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {
        leftRound.innerHTML = numbRound;
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
    console.log(numbRound);
});