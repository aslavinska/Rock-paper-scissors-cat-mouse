let userChoice = '';
let computerChoice = '';
let target = '';
let currentScore = null;
const userChoiceElement = document.querySelector('.user-choice');
const pickedElement = document.querySelector('.picked');
const userPickElement = document.querySelector('.user-pick');
const computerPickElement = document.querySelector('.computer-pick');
const resultElement = document.querySelector('.result');
const resultTitleElement = resultElement.querySelector('.title');
const cards = ['rock', 'paper', 'scissors', 'cat', 'mouse'];
const userWinResults = ['scissorspaper', 'paperrock', 'rockcat', 'catmouse', 'mousescissors',
    'rockscissors', 'scissorscat', 'catpaper', 'papermouse', 'mouserock'
];
console.log("Game Start");
pickedElement.classList.add('hidden');
function startGame() {
    console.log("Game Start Inside function");
    getWinner(userChoice, computerChoice);
    userChoiceElement.classList.add('hidden');
    pickedElement.classList.remove('hidden');
    clearResultScore();
    buildChoice(true, userChoice);
    buildChoice(false, computerChoice);
}

function getComputerChoice() {
    return cards[Math.floor(Math.random() * 5)];
}

function getWinner(user, computer) {
    // compare the results
    if (user === computer) {
        resultTitleElement.innerText = 'Tie';
        console.log('Tie');
    } else if (getUserWinScore(user + computer)) {
        resultTitleElement.innerText = 'You Won';
        console.log('You Won');
        calculateScore(1);
    } else {
        resultTitleElement.innerText = 'You Lost';
        console.log('You Lost');
        calculateScore(-1);
    }
}

function calculateScore(result) {
    currentScore += result;
}

function getUserWinScore(result) {
    return userWinResults.some(winStr => winStr === result);
}

function buildChoice(isItUserElement, className) {
    const el = document.createElement('div');
    el.classList = [`game-card ${className}`];
    el.innerHTML = `<img src="/assets/images/${className}.png" alt="${className}">`;
    if (isItUserElement) {
        userPickElement.append(el);
    } else {
        computerPickElement.append(el);
    }
}

function playAgain() {
    userChoiceElement.classList.remove('hidden');
    pickedElement.classList.add('hidden');
}

function clearResultScore() {
    userPickElement.innerHTML = '';
    computerPickElement.innerHTML = '';
}

function eventListeners() {
    document.querySelectorAll('.user-choice .game-card').forEach(card => {
        card.addEventListener('click', (evt) => {
            userChoice = evt.target.dataset.id;
            console.log("userChoice ", userChoice);
            computerChoice = getComputerChoice();
            console.log("computerChoice ", computerChoice);
            startGame();
            
        })
        resultElement.querySelector('button').addEventListener('click', playAgain);
    })
    
}

function init() {
    eventListeners();
}
init();