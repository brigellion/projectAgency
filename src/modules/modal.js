import { animate } from "./helpers";

export const modal = (window, butt, closeButt, numBtn) => {

    const modalWind = document.querySelector(window);
    const overlay = document.querySelector('.overlay');
    if (numBtn == 1) {
        const button = document.querySelector(butt);
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
    } else {
        const buttons = document.querySelectorAll(butt);
        buttons.forEach(element => {
            element.addEventListener('click', (e) => {
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
        });

    }
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
    modalWind.addEventListener('click', (e) => {
        if (e.target.closest(closeButt)) {
            modalWind.style.display = 'none';
            overlay.style.display = 'none';
        }
    })

    overlay.addEventListener('click', (e) => {
        modalWind.style.display = 'none';
        overlay.style.display = 'none';
    });
}