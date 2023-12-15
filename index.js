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

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}

function move(){
    circle.x = lerp(circle.x, mouseX, 0.1);
    circle.y = lerp(circle.y, mouseY, 0.1);
    circle.update() 
}


setInterval(move, 1000/60)