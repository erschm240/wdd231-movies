import "../css/style.css";
import { watchContainerTemplate, ratingsTemplate } from "./templates.mjs";
import { getData } from "./movies.mjs";

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