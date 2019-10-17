function makeCard(movie, parent, isRemove) {
    let button = ""
    if (isRemove) {
        button = `<button onClick='removeFav(${movie.id})'>Remove from fav</button >`
    }
    else {
        button = `<button onClick='addToFav(${JSON.stringify(movie).replace(/\'/g, "__")})'>Add to fav</button >`
    }
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class='img'>
            <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}">
        </div>
        <div class="details">
            <div class='main'>
                <div class='rating'>
                    <div class="progress-circle p${movie.vote_average * 10} ${movie.vote_average * 10 > 50 ? "over50" : ""}">
                        <span>${movie.vote_average * 10}</span>
                        <div class="left-half-clipper">
                            <div class="first50-bar"></div>
                            <div class="value-bar"></div>
                        </div>
                    </div>
                </div>
                <div class='title'>
                    <h3>${movie.title}</h3>
                    <div>${movie.release_date}</div>
                </div>
            </div>
            <p>${movie.overview}</p>
            ${button}
        </div >
        `
    parent.appendChild(card);
}