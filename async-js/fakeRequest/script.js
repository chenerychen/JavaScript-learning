



const fakeRequest = (url) => {
    return new Promise ((resolve, reject) => {
        const delayTime = Math.floor(Math.random() * 4500) + 500; 

        setTimeout(() => {
            if (delayTime > 4000) {
                reject('Connection failed')
            } 
            resolve(`Here is your fake data from ${url}`)
        }, delayTime)
    })
}


async  function makeTwoRequest() {
    let data = await fakeRequest('/page1/');
    console.log(data);
}