import { searchResults } from "./movies.mjs";

const results = document.querySelector("#search-results");

async function DisplaySearchResults() {
    const userQuery = document.querySelector("#search").value;
    console.log(userQuery);
    const data = await searchResults(userQuery);
    const searchContent = document.querySelector("#search-results");
    if (!searchContent) return;
    if (results.length === 0) {
        searchContent.innerHTML = "<p>No results found.</p>";
        return;
    }
    const searchHTML = data.map(searchTemplate).join("");
    searchContent.innerHTML += searchHTML;
}

document.querySelector(".search").addEventListener("submit", function(event) {
    // event.preventDefault();
    DisplaySearchResults();
});

results.addEventListener("click", function(event) {
    const chosen = event.target.closest(".result");
    const movieName = chosen.querySelector("h2").textContent;
    console.log(movieName);
    window.location.href = `movie.html?name=${encodeURIComponent(movieName)}`;
    movieTemplate(data);
});

results.addEventListener("keydown", function(event) {
    if (event.target.matches(".result")) {
        if (event.key == 'Enter' || event.key == ' ') {
            const movieName = event.target.querySelector("h2").textContent;
            window.location.href = `movie.html?name=${encodeURIComponent(movieName)}`;
        }
    }
});