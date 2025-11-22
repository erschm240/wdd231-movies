const baseUrl = "https://www.omdbapi.com/";

// const apiKey = import.meta.env.VITE_OMDB_API_KEY;
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

export async function guardiansData() {
    // Get the api results of movies that have "Guardians" in the title using the s parameter. Use tt if looking up a movie IMDb ID.
    const data = await getJson("&s=Guardians");
    // console.log(data);
    return data.Search.slice(0, 3);
}

function generateRandomID() {
    
}

function SearchResults() {

}

export async function singleMovieData() {
    const data = await getSingleMovieJson("i=tt3896198");
    return data;
}

guardiansData();
singleMovieData();