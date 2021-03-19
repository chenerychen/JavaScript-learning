

// How to use async keyword 

// async function myFunc() {
//      /* 
//     to reject
//     1. Having a syntax error before return 
//     2. throw new Error("my Error")
//     3. throw "my Error"
//     */

//     return "the data returned from myFunc" // return keyword is to resolve 
   
// } 

const login = async (username, password) => {
    if (!username || !password ) throw 'Missing Credentials'
    if (password === 'atl2021') return 'Welcome! ' + username
    throw "Invalid Password"
}

// login();  

login("gozilla", 'atl2020')
    .then((data) => {
        console.log(data)
    })
    .catch((data) => {
        console.log(data + " Failed to connect...")
})