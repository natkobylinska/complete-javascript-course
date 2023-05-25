'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').innerHTML = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.number').innerHTML = ':(';
  } else {
    if (guess > secretNumber) {
      document.querySelector('.message').innerHTML = 'Too big..';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').innerHTML = 'Too small..';
      score--;
    } else {
      document.querySelector('.message').innerHTML = 'Correct!';
    }
  }
  document.querySelector('.score').innerHTML = score;
});
