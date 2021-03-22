const req = new XMLHttpRequest(); 

req.onload = function () {
    console.log('All done with request!!!')
    // console.log(this.responseText)
    const parserdData = JSON.parse(this.responseText)
    console.log(parserdData.ticker.price)
}


req.onerror = function () {
    console.log('Error!!!')
    console.log(this); 
}


req.open("GET", 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send(); 