document.addEventListener("click", function (event) {
    const chosen = event.target.closest(".movie-container");
    if (!chosen) return;

    const movieID = chosen.dataset.id;
    if (!movieID) return;

    window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
});

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;

    if (!active || !active.classList.contains(".movie-container")) return;

    if (event.key === "Enter" || event.key === " " || event.code === "Space") {
        event.preventDefault();
        const movieID = active.dataset.id;
        window.location.href = `movie.html?id=${encodeURIComponent(movieID)}`;
    }
});