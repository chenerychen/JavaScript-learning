


const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    // let r = Math.floor(Math.random() * 256)  + 1; 
    // let g = Math.floor(Math.random() * 256)  + 1; 
    // let b = Math.floor(Math.random() * 256)  + 1; 
    // let newColor = `rgb(${r}, ${g}, ${b})`

    let newColor = generateRandNumbers()
    document.body.style.backgroundColor = newColor;

    let colorDisplay = document.querySelector("#colorDisplay")
    colorDisplay.innerText = newColor 
   
    let btn = document.querySelector('#btn')
    btn.style.backgroundColor = `rgb(100,101,103)`
})

const generateRandNumbers = () => {
    let r = Math.floor(Math.random() * 256)  + 1; 
    let g = Math.floor(Math.random() * 256)  + 1; 
    let b = Math.floor(Math.random() * 256)  + 1; 

    return  `rgb(${r}, ${g}, ${b})`
}