
const requestFakeDataCallback = (url, success, failure) => {
    let delay = Math.floor(Math.random() * 4500) + 500; 
    setTimeout(() => {
        if (delay > 3500) {
            failure("failed to connect...")
        } else {
            success(`Here is your requested fake data from ${url}!`)
        }
    }, delay)
}

requestFakeDataCallback('trip1.com', 
    function (response) {
         console.log(`Success1: ${response}`)
         requestFakeDataCallback('trip2.com', 
         function (response) {
             console.log( `Success2: ${response}`)
             requestFakeDataCallback('trip3.com',
             function (response) {
                 console.log( `Success3: ${response}`)
             }, 
             function (err) {
                console.log(`Sorrry ${err} 3`)
             })
         }, 
         function (err) {
             console.log(`Sorrry ${err} 2`)
         })
    }, 
    function (err)  {
        console.log(`Sorry ${err}1`)
})

