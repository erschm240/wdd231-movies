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