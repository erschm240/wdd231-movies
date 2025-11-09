const results = document.querySelector("#search-results");

results.addEventListener("click", function(event) {
    const chosen = event.target.closest(".result");
    const movieName = chosen.querySelector("h2").textContent;
    console.log(movieName);
    window.location.href = `movie.html?name=${encodeURIComponent(movieName)}`;
    // movieTemplate(data);
})

results.addEventListener("keydown", function(event) {
    if (event.target.matches(".result")) {
        if (event.key == 'Enter' || event.key == ' ') {
            const movieName = event.target.querySelector("h2").textContent;
            window.location.href = `movie.html?name=${encodeURIComponent(movieName)}`;
        }
    }
})