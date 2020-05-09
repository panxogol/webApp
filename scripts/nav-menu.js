const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');

    burguer.addEventListener('click', () => {
        console.log("click en burger");
        nav.classList.toggle('nav-menu-active');
    })
}

navSlide();