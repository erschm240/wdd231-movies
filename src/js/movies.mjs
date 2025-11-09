// This is where we will get the API data
const baseUrl = "https://www.omdbapi.com/";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
// const apiKey = "616f22d1";
console.log(apiKey);

async function getJson(queryParams) {
    const url = `${baseUrl}?apikey=${apiKey}${queryParams}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Response not ok");
    const data = await response.json();
    return data;
}

export async function guardiansData() {
    // Get the api results of movies that have "Guardians" in the title using the s letter. Use tt if looking up a movie IMDb ID.
    const data = await getJson("&s=Guardians");
    console.log(data);
    return data.Search.slice(0, 3);
}

// getData();

guardiansData();