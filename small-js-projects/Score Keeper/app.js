

const p1 = {
    score: 0, 
    button: document.querySelector("#player1Plus"), 
    display: document.querySelector("#p1Scores"), 
}

const p2 = {
    score: 0, 
    button: document.querySelector("#player2Plus"), 
    display: document.querySelector("#p2Scores")
}


// let p1Score = 0; 
// let p2Score = 0; 
// const player1Plus = document.querySelector("#player1Plus"); 
// const player2Plus = document.querySelector("#player2Plus"); 
// let p1Scores  = document.querySelector("#p1Scores"); 
// let p2Scores = document.querySelector("#p2Scores"); 
const reset = document.querySelector('#reset')
let  topScores = document.querySelector("#topScores")
let winningScore = 3; 
let isGameOver = false; 

topScores.addEventListener("change", () => {
    winningScore = parseInt(topScores.value) 
    resetFunc();                                                        // inside of a callback Function, needs to be evaluated to a value. 
})


function updateScores(first,second ) {
    if  (!isGameOver) {
        first.score += 1; 
        if (first.score === winningScore) {
            isGameOver = true;
            first.display.classList.add('has-text-success');
            second.display.classList.add("has-text-danger");
            first.button.disabled = true; 
            second.button.disabled = true; 
            
        }
    }
    first.display.textContent = first.score; 
}

p1.button.addEventListener('click',  () => {
    updateScores(p1, p2)
 }) 

// player1Plus.addEventListener('click',  () => {
    // if(!isGameOver) {
    //     p1Score+=1; 
    //     if (p1Score === winningScore) {
    //         isGameOver = true;
    //         p1Scores.classList.add('has-text-success')
    //         p2Scores.classList.add('has-text-danger')
    //         player1Plus.disabled = true; 
    //         player2Plus.disabled = true; 
    //     } 
    //      p1Scores.innerText = p1Score;
    // }
// })

p2.button.addEventListener('click',  () => {
    updateScores(p2, p1)
}) 

// player2Plus.addEventListener('click',  () => {
    // if(!isGameOver) {
    //     p2Score+=1; 
    //     if (p2Score === winningScore) {
    //         isGameOver = true;
    //         p2Scores.classList.add('has-text-success')
    //         p1Scores.classList.add('has-text-danger')
    //         player1Plus.disabled = true; 
    //         player2Plus.disabled = true; 
    //     } 
    //      p2Scores.innerText = p2Score;
//      }
// })

reset.addEventListener('click', resetFunc)  

function resetFunc()  {
    isGameOver = false; 

    for (let p of [p1,p2]) {
        p.score = 0; 
        p.display.textContent = 0; 
        p.display.classList.remove("has-text-success","has-text-danger"); 
        p.button.disabled = false; 
    }
    // p1.score = 0; 
    // p2.score = 0; 
    // p1.display.innerText = 0; 
    // p2.display.innerText = 0; 
    // p1.display.classList.remove('has-text-success', 'has-text-danger')
    // p2.display.classList.remove('has-text-success', 'has-text-danger')
    // p1.button.disabled = false; 
    // p2.button.disabled = false;  
}


// function resetFunc()  {
//     isGameOver = false; 
//     p1Score = 0; 
//     p2Score = 0; 
//     p1Scores.innerText = 0; 
//     p2Scores.innerText = 0; 
//     p1Scores.classList.remove('has-text-success', 'has-text-danger')
//     p2Scores.classList.remove('has-text-success', 'has-text-danger')
//     player1Plus.disabled = false; 
//     player2Plus.disabled = false;  
// }



