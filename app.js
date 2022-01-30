const navSlide = () => {
    const stack = document.querySelector('.stack');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    /*Toggles navigation*/
    stack.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
    /*Animate links*/
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2}s`;
    });
}

navSlide();