export function startMovie() {
    const rate = document.querySelector(".rate");
    rate.addEventListener('click', (e) => {
        let target = e.target;
        let ratingOptions = document.querySelector('.rateIt');
        ratingOptions.classList.toggle("show");
    })
    let number = 0;
    const rated = document.querySelector(".rateIt button");
    rated.addEventListener('click', (e) => {
        e.preventDefault();
        number += 1;
        const data = [`${}`,];
        localStorage.setItem(`rated${number}`, )
    })
}