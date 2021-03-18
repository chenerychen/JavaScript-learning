// Write JavaScript here 

const colorChanges = (newColor,delay) => {
    return new Promise ((resolve, reject)=> {
      setTimeout(()=> {
        document.body.style.backgroundColor = newColor; 
        resolve(); 
      },delay)
    })
  }
  
  
  
  async function rainbow() {
      await colorChanges('red', 1000)
      // console.log('Hi') 
      await colorChanges('orange', 1000)
      await colorChanges('blue', 1000)
  }
  
  // rainbow()
  // .then(() => {
  //   console.log("End of Rainbow!")
  // })
 
    
async function printRainbow() {
  await rainbow();
  console.log("End of Rainbow!")
}

