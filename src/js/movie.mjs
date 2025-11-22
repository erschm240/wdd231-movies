export function startMovie(data) {
    // const data = data;
    const rate = document.querySelector(".rate");
    rate.addEventListener('click', (e) => {
        let target = e.target;
        let ratingOptions = document.querySelector('.rateIt');
        ratingOptions.classList.toggle("show");
    })
    const rated = document.querySelector(".rateIt button");
    rated.addEventListener('click', (e) => {
        e.preventDefault();
        let rating = document.querySelector('input[name="starRating"]:checked')?.value;
        const info = [`${data.Title}`, `${data.imdbID}`, rating, `${data.Poster}`];
        localStorage.setItem(`rated${data.Title}`, JSON.stringify(info));
    })
    const toWatch = document.querySelector(".watchlist");
    toWatch.addEventListener('click', (e) => {
        const info = [`${data.Title}`, `${data.imdbID}`, `${data.Poster}`];
        localStorage.setItem(`watch${data.Title}`, JSON.stringify(info));
        console.log("watch worked");
    })
}