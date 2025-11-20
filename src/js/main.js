// import "../css/style.css";
import { watchlistTemplate, ratingsTemplate, searchTemplate, movieTemplate } from "./templates.mjs";
import { guardiansData, singleMovieData } from "./movies.mjs";

async function setwatchlistSection() {
    let data = await guardiansData();
    const watchlistSection = document.querySelector("#watchlist");
    if (!watchlistSection) return; // prevent error messages of null on pages where this section does not exist (search and movie). This works the same as the other if statements in the functions below.
    let watchlistHTML = data.map(watchlistTemplate).join("");
    watchlistSection.innerHTML += watchlistHTML;
}

async function setRatingSection() {
    let data = await guardiansData();
    const ratingSection = document.querySelector("#ratings");
    if (!ratingSection) return;
    let ratingHTML = data.map(ratingsTemplate).join("");
    ratingSection.innerHTML += ratingHTML;
}

async function setSearchContent() {
    let data = await guardiansData();
    let searchContent = document.querySelector("#search-results");
    if (!searchContent) return;
    let searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML += searchHTML;
}

async function setMovieContent() {
    let data = await singleMovieData();
    let movieContent = document.querySelector("#movie-main");
    if (!movieContent) return;
    let movieHTML = movieTemplate(data);
    movieContent.innerHTML = movieHTML;
}

setSearchContent();
setwatchlistSection();
setRatingSection();
setMovieContent();