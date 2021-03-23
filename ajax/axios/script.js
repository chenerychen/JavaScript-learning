// axios.get('https://api.cryptonator.com/api/full/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price)
// })
// .catch(err => {
//     console.log(err) 
// })


// const getBitCoinPrice = async () => {
//     try {
//     const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     console.log(res.data.ticker.price)
//     } catch (err) {
//         console.log(err + "!!!!!")
//     } 
// }


const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')



const addJokes = async () => {
    const jokeText = await getDadJokes() 
    const newLi = document.createElement('li')
    newLi.append(jokeText)
    jokes.append(newLi)
}

// const addNewJokes = async () => {
//     const jokeText = await getDadJoke();
//     // console.log(jokeText)
//     const newLi = document.createElement('li')
//     newLi.append(jokeText)
//     joke.append(newLi)
// }

const getDadJokes = async () => {
    try {
    const config = {headers: {Accept: 'application/json'}}
    const response = await axios.get('https://icanhazdadjoke.com/', config) 
    return response.data.joke
    } catch (e) {
        return e
    }
}



button.addEventListener('click', addJokes)







 
// const joke = document.querySelector('#joke')
// const button = document.querySelector('button')


// const addNewJokes = async () => {
//     const jokeText = await getDadJoke();
//     // console.log(jokeText)
//     const newLi = document.createElement('li')
//     newLi.append(jokeText)
//     joke.append(newLi)
// }


// const getDadJoke = async () => {
//     try {
// 	    const config = {headers: {Accept: 'application/json'}}
// 	    const res = await axios.get('https://icanhazdadjoke.com/', config)
//         return res.data.joke
//     } catch (e) {
//         return  "Something is wrong" + e 
//     }
// }

// button.addEventListener('click', ()  => {
//     addNewJokes()
//  })
 

// const getDadJoke = async () => {
// 	const config = {headers: {Accept: 'application/json'}}
// 	const res = await axios.get('https://icanhazdadjoke.com/', config)
// 	const newLi = document.createElement('li')
//     newLi.append(res.data.joke)
//     joke.append(newLi)
// }



