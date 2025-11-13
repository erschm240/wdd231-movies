// import "../css/style.css";
import { watchlistTemplate, ratingsTemplate, searchTemplate } from "./templates.mjs";
import { guardiansData } from "./movies.mjs";

async function setwatchlistSection() {
    let data = await guardiansData();
    const watchlistSection = document.querySelector("#watchlist");
    let watchlistHTML = data.map(watchlistTemplate).join("");
    watchlistSection.innerHTML += watchlistHTML;
    console.log(watchlistHTML);
}

async function setRatingSection() {
    let data = await guardiansData();
    const ratingSection = document.querySelector("#ratings");
    let ratingHTML = data.map(watchlistTemplate).join("");
    ratingSection.innerHTML += ratingHTML;
    console.log(ratingHTML);
}

async function setSearchContent() {
    let data = await guardiansData();
    let searchContent = document.querySelector("#search-results");
    let searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML = searchHTML;
}

setSearchContent();
setwatchlistSection();
setRatingSection();