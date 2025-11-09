export function watchContainerTemplate(guardiansData) {
    return `<div class="movie-container">
                <img src="${guardiansData.Poster}" alt="A thumbnail of ${guardiansData.Title}">
                <div class="movie-info">
                    <h3>${guardiansData.Title} (${guardiansData.Year})</h3>
                    <p>IMDB ID: ${guardiansData.imdbID}</p>
                </div>
            </div>`;

}

export function ratingsTemplate() {
    return `<div class="movie-container">
                <img src="images/temporary_thumbnail.webp" alt="A thumbnail of the rated movie.">
                <div class="movie-info">
                    <h3>Awesome Movie Title</h3>
                    <p>★★★★★</p>
                </div>
            </div>`;
}

export function searchTemplate(data) {
    return `<div class="result" tabindex="0">
                    <img src="${data.Poster}" alt="movie poster">
                    <h2>${data.Title}</h2>
                    <p>★★★★★</p>
                    <p>Optional: Genre?</p>
                </div>`
}

export function movieTemplate(data) {
        return `<img src="${data.Poster}" alt="${data.Title} poster" class="movie-poster">
        <div class="movie-info">
            <h1>${data.Title}</h1>
            <h2>Producer</h2>
            <p class="rating">Rating: ★★★★☆</p>
            <h3>Description</h3>
            <p>Words about the fake movie we are creating, wow it is so cool. So very cool. And there's a guy, and a girl, and they do things. Very interesting things. With dangerous things happening. And maybe romance, you'll have to watch to know. Anyway, it's so cool.</p>
            <div class="movie-actions">
                <button>Watchlist</button>
                <button>Rate</button>
            </div>
        </div>`
}