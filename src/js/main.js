// import "../css/style.css";
import { watchContainerTemplate, ratingsTemplate, searchTemplate } from "./templates.mjs";
import { guardiansData } from "./movies.mjs";

function setwatchlistSection() {
    const watchlistSection = document.querySelector("#watchlist");
    watchlistSection.innerHTML = watchContainerTemplate();
    
}

function setRatingSection() {
    const ratingsSection = document.querySelector("#ratings");
    ratingsSection.innerHTML = ratingsTemplate();
}

function setHomeContent() {
    const contentSection = document.querySelector("#content");
}

async function setSearchContent() {
    let data = await guardiansData();
    let searchContent = document.querySelector("#search-results");
    let searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML = searchHTML;
}

setSearchContent();