const nav = document.querySelector("nav");
const parallaxElements = document.querySelectorAll("*[data-parallax]");

document.addEventListener('scroll', (e) => {
    
    parallaxElements.forEach(element => {
        const parralaxPower = element.dataset.parallax;
        let scrollY = window.scrollY*parralaxPower;
        element.style.backgroundPosition = "center "+scrollY+"px";
    });

    nav.classList.toggle("is-pinned", scrollY != 0);
})

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded');
    parallaxElements.forEach(element => {
        const parralaxPower = element.dataset.parallax;
        let scrollY = window.scrollY*parralaxPower;
        element.style.backgroundPosition = "center "+scrollY+"px";
    });
    console.log('Parallax initialized');

    nav.classList.toggle("is-pinned", scrollY != 0);
})