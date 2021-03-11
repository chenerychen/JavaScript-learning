let maxNum = parseInt(prompt("Enter a max number"));

while (!maxNum) {
  maxNum = parseInt(prompt("Enter a valid number"))
}

let randomNum = Math.floor(Math.random() * maxNum) + 1; 

let guess = parseInt(prompt("Enter your guess number"))


let attempts = 1; 

while (guess !== randomNum) {
  if (guess > randomNum) {
    guess = parseInt(prompt("Too big"))
  }
  else {
    guess = parseInt(prompt("Too small"))
  }
  attempts++
}

console.log(`You got it at ${attempts} times`)


