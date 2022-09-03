// Background scrolling speed
let backgroundMovingSpeed = 4;

// Constant Gravity value
const gravity = 0.5;

// Getting the cat element
let cat = document.querySelector('.cat');

// Getting the cat element properties
let catProps = cat.getBoundingClientRect();
let background = document.querySelector('.background').getBoundingClientRect();

// Getting reference to the score element
let score = document.querySelector('.score'); //could be broken 
let message = document.querySelector('.message');

// Setting initial game state to start
let gameState = 'Start';

// Add an eventlistener
document.addEventListener('keydown', (e) => {
    
    // If the enter key is pressed start the game 
    if (e.key == 'Enter' && gameState != 'Play') {
      document.querySelectorAll('.pipe_sprite').forEach((e) => {
        e.remove();
      });
      cat.style.top = '55vh';
      gameInitialState = 'Play';
      message.innerHTML = '';
      score.innerHTML = '0';
      play();
    }
  });

function play(){
move();
}
function move(){
    // Check if the game is over
    if (gameState != 'Play') return;

    // Check all pipe elements
     let pipeSprite = document.querySelectorAll('.pipe_sprite');
     pipeSprite.forEach((element)=>{

     })
}

function gravityFall(){
    if (gameState != 'Play') return;
}

function callPipe(){
    if (gameState != 'Play') return;
}