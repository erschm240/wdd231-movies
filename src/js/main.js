// import "../css/style.css";
import { watchlistTemplate, ratingsTemplate, searchTemplate, movieTemplate } from "./templates.mjs";
import { guardiansData, singleMovieData } from "./movies.mjs";

async function setwatchlistSection() {
    let data = await guardiansData();
    const watchlistSection = document.querySelector("#watchlist");
    let watchlistHTML = data.map(watchlistTemplate).join("");
    watchlistSection.innerHTML += watchlistHTML;
}

async function setRatingSection() {
    let data = await guardiansData();
    const ratingSection = document.querySelector("#ratings");
    let ratingHTML = data.map(ratingsTemplate).join("");
    ratingSection.innerHTML += ratingHTML;
}

async function setSearchContent() {
    let data = await guardiansData();
    let searchContent = document.querySelector("#search-results");
    let searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML += searchHTML;
}

async function setMovieContent() {
    let data = await singleMovieData();
    let movieContent = document.querySelector("#movie-main");
    let movieHTML = movieTemplate(data);
    movieContent.innerHTML = movieHTML;
}

setSearchContent();
setwatchlistSection();
setRatingSection();
setMovieContent();