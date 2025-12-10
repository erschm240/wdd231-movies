const baseUrl = "https://www.omdbapi.com/";

const apiKey = "616f22d1";

async function getJson(searchWord) {
    const url = `${baseUrl}?apikey=${apiKey}${searchWord}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Response not ok");
    const data = await response.json();
    return data;
}

async function getSingleMovieJson(movieID) {
    const url = `${baseUrl}?${movieID}&apikey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Response not ok");
    const data = await response.json();
    return data;
}

export async function searchResults(query) {
    const data = await getJson(`&s=${encodeURIComponent(query)}`);
    if (!data.Search) return [];
    return data.Search;
}

export async function singleMovieData() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieID = urlParams.get("id");
    if (!movieID) {
        const errorMsg = document.querySelector(".loading-msg");
        if (!errorMsg) return;
        errorMsg.textContent = "No movie ID found in URL. Try visiting the search page and searching for a movie!";
        return null;
    }
    const data = await getSingleMovieJson(`i=${movieID}`);
    return data;
}

singleMovieData();