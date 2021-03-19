


const fakeRequestPromises = (url) => {
    return new Promise ((resolve, reject ) => {
        const delay = Math.floor(Math.random() * 4500) + 500; 

        setTimeout(() => {
            if (delay > 3500) {
                reject("cannot connect...")
            } else {
                resolve("here is the requested data!")
            }
        }, delay)
    })
}


fakeRequestPromises("book1.com")
    .then((response ) => {
        console.log("Success 1 " + response) 
        return fakeRequestPromises("book2.com" )
    })
    .then ((response) => {
        console.log("Success 2 " + response) 
        return fakeRequestPromises('book3.com' )
    })
    .then((response) => {
        console.log("Success 3 " + response)
    })
    .catch((err) => {
        console.log(err + " failed...")
})

// fakeRequestPromises("book1.com") // returns the Promise with either resovled or rejected object back and chain it onto the .then or .catch
//     .then ((response) => {
//         console.log(`Success1: ${response}`)
//         fakeRequestPromises("book2.com")
//         .then ((response) => {
//             console.log(`Success2: ${response}`)
//             fakeRequestPromises("book3.com")
//             .then ((response) => {
//                 console.log(`Success3: ${response}`)
//             })
//             .catch((err) => {
//                 console.log( `Sorry, ${err} 3`)
//             }) 
//         })
//         .catch((err) => {
//             console.log( `Sorry, ${err} 2`)
//          })
//     })
//     .catch((err) => {
//         console.log( `Sorry, ${err} 1`)
// })
