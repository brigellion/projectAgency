
export const sliderDesktop = (container, sliderArray, numSlides, rightArrow, leftArrow) => {
    const sliderContainer = document.getElementById(container);
    const slidesArray = sliderContainer.querySelectorAll(sliderArray);
    if (!sliderContainer || slidesArray.length == 0) {
        console.warn('нет класса слайдера/слайдов!');
        return;
    }
    slidesArray.forEach((element, index) => {
        (index > numSlides - 1) ? element.classList.add('no-active') : element.classList.add('active');
    });
    sliderContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest(rightArrow) || e.target.closest(leftArrow)) {
            slidesArray.forEach(element => {
                element.classList.toggle('no-active');
                element.classList.toggle('active');
            });
        }
    });
}
export const sliderMobile = (container, sliderArray, rightArrow, leftArrow) => {

    const sliderContainer = document.getElementById(container);
    const slidesArray = sliderContainer.querySelectorAll(sliderArray);
    let current = 0;

    if (!sliderContainer || slidesArray.length == 0) {
        console.warn('нет класса слайдера/слайдов!');
        return;
    }

    slidesArray.forEach((element, index) => {
        (index === current) ? element.style.display = 'block' : element.style.display = 'none';
    });

    sliderContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest(rightArrow)) {
            slidesArray[current].style.display = 'none';
            current++;
            if (current >= slidesArray.length) {
                current = 0;
            }
            slidesArray[current].style.display = 'block';
        } else if (e.target.closest(leftArrow)) {
            slidesArray[current].style.display = 'none';
            current--;
            if (current < 0) {
                current = slidesArray.length - 1;
            }
            slidesArray[current].style.display = 'block';
        }
    });
}


