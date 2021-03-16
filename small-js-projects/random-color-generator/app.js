


const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256)  + 1; 
    let g = Math.floor(Math.random() * 256)  + 1; 
    let b = Math.floor(Math.random() * 256)  + 1; 

    let newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;

    let colorDisplay = document.querySelector("#colorDisplay")
    colorDisplay.innerText = newColor 
   
    let btn = document.querySelector('#btn')
    btn.style.backgroundColor = `rgb(100,101,103)`
})