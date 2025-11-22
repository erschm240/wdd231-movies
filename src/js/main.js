// import "../css/style.css";
import { watchlistTemplate, ratingsTemplate, searchTemplate, movieTemplate } from "./templates.mjs";
import { guardiansData, singleMovieData } from "./movies.mjs";
import { startMovie } from "./movie.mjs";

function setwatchlistSection() {
    const watchlistSection = document.querySelector("#watchlist");
    if (!watchlistSection) return; // prevent error messages of null on pages where this section does not exist (search and movie). This works the same as the other if statements in the functions below.
    const toWatchItems = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("watch")) {
            const value = JSON.parse(localStorage.getItem(key));
            toWatchItems.push({key, value});
        }
    }
    let watchlistHTML = toWatchItems.map(watchlistTemplate).join("");
    watchlistSection.innerHTML += watchlistHTML;
}

function setRatingSection() {
    const ratingSection = document.querySelector("#ratings");
    if (!ratingSection) return;
    const ratedItems = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("rated")) {
            const value = JSON.parse(localStorage.getItem(key));
            ratedItems.push({key, value})
        }
    }
    let ratingHTML = ratedItems.map(ratingsTemplate).join("");
    ratingSection.innerHTML += ratingHTML;
}

async function setSearchContent() {
    // let data = await guardiansData();
}

async function setMovieContent() {
    let data = await singleMovieData();
    let movieContent = document.querySelector("#movie-main");
    if (!movieContent) return;
    let movieHTML = movieTemplate(data);
    movieContent.innerHTML = movieHTML;
    startMovie(data);
}

setSearchContent();
setwatchlistSection();
setRatingSection();
setMovieContent();