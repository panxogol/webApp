const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');

    burguer.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-menu-active');

        //Animate Link
        navLinks.forEach((link, index) => {
            link.style.opacity = '0';
            var delay = index / 5 + 0.6;
            var animationIn = 'navLinkFade 0.5s ease forwards ' + delay + 's';
            var animationOut = 'navLinkFadeOut 0.5s';

            if (link.style.animation) {
                link.style.animation = animationOut;
                setTimeout(function () { link.style.animation = ''; }, 500);
                link.style.opacity = '1';
            }

            else {
                link.style.animation = animationIn;
            }
        });
    });
}

navSlide();