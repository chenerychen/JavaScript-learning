// new Promise((resolve, reject) => {    //expect a function with two params 
    // if nothing inside, the PromiseStatus: "pending"
    // resolve();
    // reject(); 
// })  

/* 
const fakeRequest = (url) => {
    return new Promise ((resolve, reject) => {
        const rand = Math.random(); 
        setTimeout(() => {
            if  (rand < 0.5) resolve("data details")
            reject("failed to connect...")
        }, 1000)
    })
}

fakeRequest('/dog1.com')
    .then((data) => {
        console.log("Requested: " + data)
    })
    .catch((err)=> {
        console.log("Sorry, " + err)
})
*/

const delayedColorChanger = (color,delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); 
        }, delay)
    })
}

delayedColorChanger('red', 1000)
    .then (() => {
       return  delayedColorChanger("orange",1000)
    })
    .then (() => {
        return delayedColorChanger("yellow",1000)
    })
    .then (() => {
        return delayedColorChanger("blue",1000)
    })
    .then (() => {
        return delayedColorChanger("purple",1000)
    })
    .then (() =>delayedColorChanger("pink",1000))
 