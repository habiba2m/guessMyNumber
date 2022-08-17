'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //Correct answer
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //guess is wrong
  } else if (guess !== secretNumber) {
    document.querySelector('body').style.backgroundColor = 'black';
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '👆 Too high!' : '👇 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   document.querySelector('body').style.backgroundColor = 'black';
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '👆 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '😥 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   //too low
    // } else if (guess < secretNumber) {
    //   document.querySelector('body').style.backgroundColor = 'black';
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '👇 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
    // else {
    //   document.querySelector('.message').textContent = '😥 You lost the game';
    //   document.querySelector('.score').textContent = 0;
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
