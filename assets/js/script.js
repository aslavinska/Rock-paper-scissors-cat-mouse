let userChoice = '';
let computerChoice = '';
let currentScore = null;
let currentCompScore = null;
const userChoiceElement = document.querySelector('.user-choice');
const pickedElement = document.querySelector('.picked');
const userPickElement = document.querySelector('.user-pick');
const computerPickElement = document.querySelector('.computer-pick');
const resultElement = document.querySelector('.result');
const resultTitleElement = resultElement.querySelector('.title');
const scoreCountElement = document.querySelector('.score-count');
const scoreCompCountElement = document.querySelector('.comp-score-count');
const rulesButton = document.querySelector('.rules-button');
const modelBackground = document.querySelector('.model-background');
const model = document.querySelector('.model');
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
        calculateCompScore(1);
    }
}

function calculateScore(result) {
    currentScore += result;
    updateScoreBoard();
}

function calculateCompScore(result) {
    currentCompScore += result;
    updateCompScoreBoard();
}

function updateScoreBoard() {
    scoreCountElement.innerText = currentScore;
}

function updateCompScoreBoard() {
    scoreCompCountElement.innerText = currentCompScore;
}

function getUserWinScore(result) {
    return userWinResults.some(winStr => winStr === result);
}

function buildChoice(isItUserElement, className) {
    const element = document.createElement('div');
    element.classList = [`game-card ${className}`];
    element.innerHTML = `<img src="/assets/images/${className}.png" alt="${className}">`;
    if (isItUserElement) {
        userPickElement.append(element);
    } else {
        computerPickElement.append(element);
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

        });
        resultElement.querySelector('button').addEventListener('click', playAgain);
    });

}
// Model 
rulesButton.addEventListener('click', () => {
    model.classList.add('active');
    modelBackground.classList.add('active');
});

modelBackground.addEventListener('click', (event) => {
    if (event.target === modelBackground) {
        hideModel();
    }
});

document.querySelector('.close').addEventListener('click', hideModel);

function hideModel() {
    model.classList.remove('active');
    modelBackground.classList.remove('active');
}


function init() {
    eventListeners();
}
init();