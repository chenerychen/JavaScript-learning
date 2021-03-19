async function delayedColorChanger(color,delay) {
    setTimeout(() => {
        document.body.style.backgroundColor = color
      
        return  delayedColorChanger(color,delay)
    },delay )
}

// const delayedColorChanger = (color, delay) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {  
//             document.body.style.backgroundColor = color
//             resolve(); 
//         },delay)
//     })
// }

async function rainbow () {
    await delayedColorChanger('red' ,1000) // each one of these are promise object
    console.log('Hi')
    await delayedColorChanger('orange' ,1000)
    await delayedColorChanger('blue' ,1000)
    await delayedColorChanger('green' ,1000)
    return 'done!!" '
}

// rainbow()
//     .then(() => {
//         console.log('the end!')
//     })
//     .catch(() => {
//         console.log("Something is wrong")
// })

async function pRainbow() {
    await rainbow(); 
    console.log("End of function!")
}

