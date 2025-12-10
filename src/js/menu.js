let menuButton = document.querySelector('.menu-btn');
let menu_nav = document.querySelector(".menu-nav");

menuButton.addEventListener('click', (e) => {
    let target = e.target;
    let menu = document.querySelector('.menu-nav');
    menu.classList.toggle("showH");
})

menu_nav.addEventListener("click", (e) => {
    let links = menu_nav.querySelectorAll("a");
    if (links.length < 2) return;
    let rect = menu_nav.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    let half = rect.width / 2;
    let chosenLink = clickX < half ? links[0] : links[1];
    window.location.href = chosenLink.href;
})