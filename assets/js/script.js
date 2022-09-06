// check if the app is fully loaded and identify user actions
window.addEventListener('load', ()=>{
    // event listener for each icon item 
    let userChoice ='';
    document.querySelectorAll('user-choice .game-card').forEach(card=>{
        card.addEventListener('click',(event)=>{
            userChoice = getUserChoice(event.target);
            startGame();
        })
    })
 
})

function startGame(){

}

function getUserChoice(targer){
    console.log(targer);
    if (target.nodeName === 'IMG'){
        return target.parentElement.classList[1];
    }
    return target.classList[1];
}

function getComputerChoice(){

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