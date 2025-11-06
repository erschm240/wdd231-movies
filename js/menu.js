let menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', (e) => {
    let target = e.target;
    let menu = document.querySelector('.menu-nav');
    menu.classList.toggle("show");
    console.log(menu);
})

// function enableNavigation() {
//   menuButton.addEventListener('click', (ev) => {
//     let target = ev.target;
//     document.querySelector('.global-nav').classList.toggle("show");
//     if (target.tagName != "BUTTON") {
//       target = target.closest("button");
//     }
//     if (document.querySelector('.global-nav').classList.contains("show")) {
//       target.setAttribute("aria-expanded", true);
//     } else {
//       target.setAttribute("aria-expanded", false);
//     }

//     console.log("toggle");
//   })
// }

// enableNavigation();