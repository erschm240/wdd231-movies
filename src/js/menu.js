let menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', (e) => {
    let target = e.target;
    let menu = document.querySelector('.menu-nav');
    menu.classList.toggle("showH");
    console.log(menu);
})