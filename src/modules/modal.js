import { animate } from "./helpers";

export const modal = () => {
    const modalWind = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const button = document.querySelector('.button')

    let idAnimation;
    let opacity = 0;

    const animationShow = function () {
        idAnimation = requestAnimationFrame(animationShow);
        opacity += 0.02;
        modalWind.style.opacity = opacity;
        overlay.style.opacity = opacity * 2;
        if (opacity > 1) {
            cancelAnimationFrame(idAnimation);
        }
    };

    button.addEventListener('click', (e) => {
        if (e.target.closest('.fancyboxModal')) {
            modalWind.style.display = 'block';
            overlay.style.display = 'block';

            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modalWind.style.opacity = progress;
                    overlay.style.opacity = progress;
                }
            });
        }
    });

    modalWind.addEventListener('click', (e) => {
        if (e.target.closest('.header-modal__close')) {
            modalWind.style.display = 'none';
            overlay.style.display = 'none';
        }
    })
}