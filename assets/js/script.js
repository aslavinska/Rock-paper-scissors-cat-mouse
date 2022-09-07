function gameMain(){
    let userChoice ='';
    let computerChoice ='';
    console.log("Game Start");
    const cards = ['rock', 'paper', 'scissors', 'cat', 'mouse'];
    const userWinResults =['scissorspaper', 'paperrock', 'rockcat', 'catmouse', 'mousescissors',
    'rockscissors', 'scissorscat', 'catpaper', 'papermouse', 'mouserock'];;
    // check if the app is fully loaded and identify user actions
    window.addEventListener('load', () => {
        
        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (evt) => {
                userChoice = getUserChoice(evt.target);
                computerChoice = getComputerChoice();
                console.log(getUserChoice());
                console.log(getComputerChoice());
                startGame();
            })
        });
    
    })

function startGame(){
    getWinner(userChoice, computerChoice);
}

function getUserChoice(target) {
    if (target.nodeName === 'IMG') {
        return target.parentElement.classList[1];
    }
    return target.classList[1];
}

function getComputerChoice(){
    return cards[Math.floor(Math.random()*5)];
}

function getWinner(user, computer) {
    // compare the results
    if (user === computer) {
        console.log('Tie');
    } else if (getUserWinScore(user + computer)) {
        console.log('You Won');
        calculateScore(1);
    } else {
        console.log('You Lost');
        calculateScore(-1);
    }
}

function getUserWinScore(result){
    return userWinResults.some(winStr=> winStr === result);
}
function buildChoice(){
    
}
function tryAgain(){
    
}

function clearResult(){
    
}
}