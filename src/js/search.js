import { searchResults } from "./movies.mjs";
import { searchTemplate } from "./templates.mjs";

const results = document.querySelector("#search-results");

async function DisplaySearchResults() {
    const query = document.querySelector("#search").value.trim();
    if (!query) return;
    console.log(query);
    const data = await searchResults(query);
    const searchContent = document.querySelector("#search-results");
    searchContent.innerHTML = "";
    if (!searchContent) return;
    if (data.length === 0) {
        searchContent.innerHTML = "<p>No results found.</p>";
        return;
    }
    const searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML += searchHTML;
}

document.querySelector(".search").addEventListener("submit", function(event) {
    event.preventDefault();
    DisplaySearchResults();
});

results.addEventListener("click", function(event) {
    const chosen = event.target.closest(".result");
    if (!chosen) return;
    const movieName = chosen.querySelector("h2").textContent;
    const movieID = chosen.dataset.id;
    console.log(movieID);
    window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
});

results.addEventListener("keydown", function(event) {
    if (event.target.matches(".result")) {
        if (event.key == 'Enter' || event.key == ' ') {
            const movieName = event.target.querySelector("h2").textContent;
            const movieID = chosen.dataset.id;
            window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
        }
    }
});