"use strict"
var newGame = document.getElementById('new-game');
var leftRound = document.getElementById('round');
var resultMsg = document.getElementById('result');

var userScore = document.getElementById('user-score');
var computerScore = document.getElementById('computer-score');
var rock = document.getElementById('r');
var paper = document.getElementById('p');
var scissors = document.getElementById('s');
var countRound = 0;

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


/*    if (userScore > computerScore) {
        document.getElementById('board').classList.add('score-board-green');
    } else if (userScore < computerScore) {
        document.getElementById('board').classList.add('score-board-red');
    }*/





var playerMove = function(playerChoice) {
    var com = computerChoice();
    parallel(playerChoice, com);
};

var computerChoice = function() {
    var randomNum = Math.floor((Math.random() * 3) + 1);
    console.log(randomNum);
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
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice === computerChoice) {
        resultMsg.innerHTML = 'it is  draw'
    } else if ((playerChoice === 'paper') && (computerChoice === 'rock') || ((playerChoice === 'rock') && (computerChoice === 'scissors')) || ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
        resultMsg.innerHTML = 'You won';
        userScore.innerHTML++;
        countRound += 1;
        leftRound.innerHTML--;
    } else if ((computerChoice === 'paper') && (playerChoice === 'rock') || ((computerChoice === 'rock') && (playerChoice === 'scissors')) || ((computerChoice === 'scissors') && (playerChoice === 'paper'))) {
        resultMsg.innerHTML = 'You lost';
        computerScore.innerHTML++;
        countRound += 1;
        leftRound.innerHTML--;
    }
    console.log(countRound);
};



var reset = function() {
    //    leftRound.innerHTML = 'number of rounds!'
    resultMsg.innerHTML = 'start game' + '<br>';
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
};



newGame.addEventListener('click', function() {
    reset();
    var numbRound = window.prompt('how many times do you want to play?  - enter a number greater than zero');
    if (isNaN(numbRound) || (numbRound === '') || (numbRound === null) || (numbRound === '-1')) {
        resultMsg.innerHTML = 'Just type number remember';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {
        return leftRound.innerHTML = numbRound;
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }

    var f = numbRound;
    if (f === '0') {
        leftRound.insertAdjacentHTML('afterend', 'eeee');
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }


});