const player1Plus = document.querySelector("#player1Plus"); 
const player2Plus = document.querySelector("#player2Plus"); 
const reset = document.querySelector('#reset')
const h1 = document.querySelector('h1')
let p1Scores  = document.querySelector("#p1Scores"); 
let p2Scores = document.querySelector("#p2Scores"); 

let  topScores = document.querySelector("#topScores")
let winningScore = 3; 
let p1Score = 0; 
let p2Score = 0; 

let isGameOver = false; 

topScores.addEventListener("change", () => {
    winningScore = parseInt(topScores.value) 
    resetFunc();                                                        // inside of a callback Function, needs to be evaluated to a value. 
})

player1Plus.addEventListener('click',  () => {
    if(!isGameOver) {
        p1Score+=1; 
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Scores.classList.add('has-text-success')
            p2Scores.classList.add('has-text-danger')
            player1Plus.disabled = true; 
            player2Plus.disabled = true; 
        } 
         p1Scores.innerText = p1Score;

    }
})

player2Plus.addEventListener('click',  () => {
    if(!isGameOver) {
        p2Score+=1; 
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Scores.classList.add('has-text-success')
            p1Scores.classList.add('has-text-danger')
            player1Plus.disabled = true; 
            player2Plus.disabled = true; 
        } 
         p2Scores.innerText = p2Score;
    }
})

reset.addEventListener('click', resetFunc)  


function resetFunc()  {
    isGameOver = false; 
    p1Score = 0; 
    p2Score = 0; 
    p1Scores.innerText = 0; 
    p2Scores.innerText = 0; 
    p1Scores.classList.remove('has-text-success', 'has-text-danger')
    p2Scores.classList.remove('has-text-success', 'has-text-danger')
    player1Plus.disabled = false; 
    player2Plus.disabled = false;  
}



