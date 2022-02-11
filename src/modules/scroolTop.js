export const scroolTop = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    btnScroll.style.display = 'none';

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            btnScroll.style.display = 'block';
        }
        if (scrolled < coords) {
            btnScroll.style.display = 'none';
        }
    });

    const toTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(toTop, 2);
        }
    }

    btnScroll.addEventListener('click', toTop);
}