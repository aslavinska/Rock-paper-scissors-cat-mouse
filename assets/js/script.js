// check if the app is fully loaded and identify user actions
window.addEventListener('load', ()=>{
    // event listener for each icon item 
    let userChoice ='';
    document.querySelectorAll('user-choice .game-card').forEach(card=>{
        card.addEventListener('click',(event)=>{
            userChoice = getUserChoice(event);
            startGame();
        })
    })
 
})

function startGame(){

}

function getUserChoice(event){

}