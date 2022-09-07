function gameMain(){
    let userChoice ='';
    let computerChoice ='';
    console.log("Game Start");
    const cards = ['rock', 'paper', 'scissors', 'cat', 'mouse'];
    // check if the app is fully loaded and identify user actions
    window.addEventListener('load', () => {
        
        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (evt) => {
                userChoice = getUserChoice(evt.target);
                computerChoice = getComputerChoice();
                console.log(computerChoice);
                startGame();
            })
        });
    
    })

function startGame(){

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
function getWinner(){

}
function getUserScore(){

}
function buildChoice(){
    
}
function tryAgain(){
    
}

function clearResult(){
    
}
}