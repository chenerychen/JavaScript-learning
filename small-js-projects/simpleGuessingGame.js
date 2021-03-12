/* 
1. Generate a random number from user and set it to the max number
2. Ensure that the user input will be a valid number 
3. Add attempts to keep track of the time of user input before the correct guess
4. Add q for quit the program
5. Add a boolean to display messages to guide users
6. Display message for quitting the program or get the correct answer

*/ 

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

