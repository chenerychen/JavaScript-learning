
const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector("#tweet")

tweetForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    // const usernameInput = document.querySelector('input')[0]
    // const tweetInput = document.querySelector('input')[1]

    const usernameInput = tweetForm.elements.username; 
    const tweetInput = tweetForm.elements.tweet; 

    // console.log(usernameInput, tweetInput) // console.log() correctly

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = ''
    tweetInput.value = ''; 
    // const newTweet = document.createElement('li')
    // const bTag = document.createElement('b')
    // bTag.append(usernameInput)
    // newTweet.append(bTag)
    // newTweet.append(`- ${tweetInput}`) 
    // tweetsContainer.appendChild(newTweet)
}) 

const addTweet = (usernameInput, tweetInput ) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(usernameInput)
    newTweet.append(bTag)
    newTweet.append(`- ${tweetInput}`) 
    tweetsContainer.appendChild(newTweet)
}