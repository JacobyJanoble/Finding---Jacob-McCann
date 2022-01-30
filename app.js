const navSlide = () => {
    const stack = document.querySelector('.stack');
    const nav = document.querySelector('.nav-links');

    stack.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();