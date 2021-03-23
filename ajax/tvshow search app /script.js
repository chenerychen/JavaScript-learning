

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchTerm = form.elements.query.value  // gives input value
    const config = {params: {q: searchTerm}}
    const response = await axios.get(`http://api.tvmaze.com/search/shows?`, config)
    displayImages(response.data)
    form.elements.query.value = ''
    // console.log(response.data[0].show.image.medium)

    // const img = document.createElement('IMG');
    // img.src = response.data[1].show.image.medium
    // document.body.append(img)
})



const displayImages = (shows) => {
    for (let result of shows) {
        if  (result.show.image) {
         const img = document.createElement('IMG');
         img.src =  result.show.image.medium
         document.body.append(img)
        } 
    }
}

