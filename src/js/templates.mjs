export function watchlistTemplate({key, value}) {
    const [title, imdbID, poster] = value;
    return `<div class="movie-container">
                    <img src="${poster}" alt="A thumbnail of ${title}">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <p>IMDB ID: ${imdbID}</p>
                    </div>
                </div>`;
}

export function ratingsTemplate({key, value}) {
    const [title, imdbID, rating, poster] = value;
    let starRating = "";
    for (let i = 0; i < rating; i ++) {
        starRating += "★";
    }
    return `<div class="movie-container">
                    <img src="${poster}" alt="A thumbnail of ${title}">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <p>IMDB ID: ${imdbID}</p>
                        <p>Rating: ${starRating}</p>
                    </div>
                </div>`;
}

export function searchTemplate(data) {
    return `<div class="result" tabindex="0">
                    <img src="${data.Poster}" alt="movie poster">
                    <h2>${data.Title}</h2>
                    <p>IMDB ID: ${data.imdbID}</p>
                </div>`
}

export function movieTemplate(data) {
    console.log(data);
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
                                <input type="radio" name="starRating" value="1" tabindex="0"> 1★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="2" tabindex="0"> 2★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="3" tabindex="0"> 3★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="4" tabindex="0"> 4★
                            </label>
                            <label>
                                <input type="radio" name="starRating" value="5" tabindex="0"> 5★
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>`
}