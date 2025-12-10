import { searchResults } from "./movies.mjs";
import { searchTemplate } from "./templates.mjs";

const results = document.querySelector("#search-results");

async function DisplaySearchResults() {
    const query = document.querySelector("#search").value.trim();
    if (!sanitizeSearch(query)) return;
    if (!query) return;
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

function sanitizeSearch(query) {
    const loadingMsg = document.querySelector(".loading-msg-s");
    for (let i = 0; i < query.length; i++) {
        const character = query[i];
        switch (character) {
            case "<":
            case ">":
            case "\"":
            case "'":
            case ";":
            case "/":
            case "\\":
            case "|":
            case "%":
            case "`":
            case "$":
            case "#":
            case "(":
            case ")":
            case "{":
            case "}":
            case "[":
            case "]":
            case "@":
                loadingMsg.textContent = "Bad search. Please try again.";
                return false;
        }
    }
    return true;
}

document.querySelector(".search").addEventListener("submit", function(event) {
    event.preventDefault();
    DisplaySearchResults();
});

results.addEventListener("click", function(event) {
    let chosen = event.target.closest(".result");
    if (!chosen) return;
    const movieID = chosen.dataset.id;
    console.log(movieID);
    window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
});

results.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    if (!active || !active.classList.contains("result")) return;

        if (event.key === 'Enter' || event.key === ' ' || event.code === 'Space') {
            event.preventDefault();
            const movieID = active.dataset.id;
            window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
        }
});