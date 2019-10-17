async function getMovies(category) {
    const res = document.querySelector(".result")
    res.innerHTML = "Fetching results..."
    const movies = await getResult(category)
    res.innerHTML = ""
    
    for (const movie of movies) {
        if (!movie.adult) {
            makeCard(movie, res)
        }
    }

};
// getMovies('popular')

function categoryUpdated(category) {
    document.querySelector('.status').innerHTML = `Showing first 10 category from ${category}`
    getMovies(category)
}

function addToFav(movie) {
    movie = JSON.parse(JSON.stringify(movie).replace(/__/g, "'"))
    // console.log(movie)
    localStorage.setItem(movie.id, JSON.stringify(movie));
    refreshDrawer()
}

function refreshDrawer() {
    const result = document.querySelector('.favResult')
    result.innerHTML = "Looks empty"
    const movies = Object.entries(localStorage)
    if (movies.length > 0) {
        result.innerHTML = ""
    }
    for (const movieData of movies) {
        const movie = JSON.parse(movieData[1])
        if (!movie.adult) {
            makeCard(movie, result, true)
        }
    }
}

function showFav() {
    const drawer = document.querySelector('.myFav')
    refreshDrawer()
    drawer.classList.toggle('hide')
}

function removeFav(id) {
    localStorage.removeItem(id)
    refreshDrawer()
}

function hide() {
    const drawer = document.querySelector('.myFav')
    drawer.classList.toggle('hide')
}