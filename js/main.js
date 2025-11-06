import "../css/style.css";
import { watchlistTemplate, ratingsTemplate } from "./templates.mjs";

function setwatchlistSection() {
    const watchlistSection = document.querySelector("#watchlist");
    watchlistSection.innerHTML = watchlistTemplate();
}

function setwatchlistSection() {
    const watchlistSection = document.querySelector("#ratings");
    watchlistSection.innerHTML = watchlistTemplate();
}