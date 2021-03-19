const fakeRequestPromises = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500; 
        setTimeout(() => { 
            if (delay > 3500) {
            reject("failed to connect...")
        } else {
            resolve(`here is your fake data from ${url}`)
              }
         }, delay)
    }) 
}

/*
If just call fakeRequestPromises("abc") 
It will return // Promise {<pending>} 
It says "fulfilled" after toggling

saved to variable 
toggled the Promise Object: pending at the begging
1. Fullied 
2. Rejected
3. Pending
*/


fakeRequestPromises("book1.com") // returns the Promise with either resovled or rejected object back and chain it onto the .then or .catch
    .then ((response) => {
        console.log(`Success1: ${response}`)
        fakeRequestPromises("book2.com")
        .then ((response) => {
            console.log(`Success2: ${response}`)
            fakeRequestPromises("book3.com")
            .then ((response) => {
                console.log(`Success3: ${response}`)
            })
            .catch((err) => {
                console.log( `Sorry, ${err} 3`)
            }) 
        })
        .catch((err) => {
            console.log( `Sorry, ${err} 2`)
         })
    })
    .catch((err) => {
        console.log( `Sorry, ${err} 1`)
})
