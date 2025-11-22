export function watchlistTemplate(guardiansData) {
    return `<div class="movie-container">
                    <img src="${guardiansData.Poster}" alt="A thumbnail of ${guardiansData.Title}">
                    <div class="movie-info">
                        <h3>${guardiansData.Title}</h3>
                        <p>IMDB ID: ${guardiansData.imdbID}</p>
                    </div>
                </div>`;
}

export function ratingsTemplate(guardiansData) {
    return `<div class="movie-container">
                    <img src="${guardiansData.Poster}" alt="A thumbnail of ${guardiansData.Title}">
                    <div class="movie-info">
                        <h3>${guardiansData.Title}</h3>
                        <p>IMDB ID: ${guardiansData.imdbID}</p>
                        <p>Rating: ★★★★★</p>
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
    console.log("Movie data:", data);
        return `<img src="${data.Poster}" alt="${data.Title} poster" class="movie-poster">
        <div class="movie-info">
            <h1>${data.Title}</h1>
            <h2>Producer: </h2>
            <p class="rating">Rating: ${data.Ratings[0].Value}</p>
            <h3>Description</h3>
            <p>${data.Plot}</p>
            <div class="movie-actions">
                <button class="watchlist">Watchlist</button>
                <div class="rateWrapper">
                    <button class="rate">Rate</button>
                    <div class="rateIt">
                        <form id="rateIt">
                            <label>
                                <input type="radio" name="starRating" value="1"> 1★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="2"> 2★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="3"> 3★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="4"> 4★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="5"> 5★
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`
}