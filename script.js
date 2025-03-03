'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

 //document.querySelector('.number').textContent=secretNumber;
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
   if(!guess){
       displayMessage('No Number!');
    }else if(guess === secretNumber){
        displayMessage('Correct Number!');
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent=secretNumber;
    }
    else if(guess!==secretNumber){
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess>secretNumber?'Too high!':'Too low!');
    }else{
        displayMessage('You lost the game :( !!');
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
});