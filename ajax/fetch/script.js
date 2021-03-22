// fetch('https://api.cryptonator.com/api/full/btc-usd') // fulfilled 
// .then ((response) => {
// 	console.log("Response, waiting to parse...", response); 
// 	return response.json()
// })
// .then(data => {console.log("Data parsed ", data)
// 	console.log(data.ticker.price) 
// })
// .catch((err) => {
// 	console.log(err); 
// })



const fetchBitConinPrice = async () => {
	try {
		const res = await fetch('https://api.cryptonator.com/api/full/btc-usd') 
		const data = await res.json()
		console.log(data.ticker.price)
	} catch (e) {
		console.log(e)
	} 
} 

