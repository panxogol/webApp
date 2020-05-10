const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');
    
    // Toggle Nav
    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-menu-active');
    });
    
    // Animate Links
    navLinks.forEach((link, index) => {
        console.log(index / 7 + 1.5);
        link.style.animation = "navLinkFade 0.5s ease forwards ${index / 5 + 1.5}s";
    });

}

navSlide();