let maxNum = parseInt(prompt("Enter a max number"));

while (!maxNum) {
  maxNum = parseInt(prompt("Enter a valid number"))
}

let randomNum = Math.floor(Math.random() * maxNum) + 1; 

let guess = parseInt(prompt("Enter your guess number")) 

let attempts = 1; 

while (parseInt(guess) !== randomNum) {
  if (guess === 'q') break 
  
  if (guess > randomNum) { 
    guess = prompt("Too big")
  }
  else {
    guess = prompt("Too small")
  }
  
  attempts++
}

if (guess === 'q') {
  console.log("You exited from the game")
} else {
  console.log(`You got it at ${attempts} attempts`)
} 

