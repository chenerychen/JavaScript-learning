
const id = 'chenerychen' 
function getLocationURL([city, state]) {
    return 
}


$("#btn").on("click", () => {
    $.getJSON({
        url:`https://api.github.com/users/${id}`, 
        success: user => {
            $.getJSON ({
                url: getLocationURL(user.location.split(",")), 
                success(weather) {
                    updateUI({
                      user, 
                    weather: weather.query.results
                     }); 
                }, 
                error: 'showError'
             }); 
        }, 
    error: 'showError'
    }); 
})