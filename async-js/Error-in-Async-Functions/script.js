


const fakeRequest = (url, delay) => {
    return new Promise ((resolve, reject) => {
      const rand = Math.random(); 
      setTimeout(() => {
        if (rand > 0.5) reject("failed to connect") 
        else resolve("here is your fake data from " + url) 
      }, delay)
    })
}

async function makeReqest () {
    try {
        let data1 = await fakeRequest('facebook.page/1')
        console.log(data1)
    } catch(e) {
        console.log('Caught an erorr! ' + e)
    }
}
