import { modal } from "./modules/modal";
import { sendForm } from "./modules/sendForm";
import { sliderMobile, sliderDesktop } from "./modules/slider";
import { timer } from "./modules/timer";
import { validator } from "./modules/validator";
import { modalImg } from "./modules/modalImg";
import { scroolTop } from "./modules/scroolTop";
import { calculator } from "./modules/calculator"
import { comments } from "./modules/comments"

modal('.header-modal', '.button', '.header-modal__close', 1);
modal('.services-modal', '.service-button', '.services-modal__close', 4);

if (document.documentElement.clientWidth > 576) {
    sliderDesktop('benefits', '.benefits__item', 3, '.benefits__arrow--right', '.benefits__arrow--left');
    sliderDesktop('services', '.service-block', 2, '.services__arrow--right', '.services__arrow--left');
} else {
    sliderMobile('benefits', '.benefits__item', '.benefits__arrow--right', '.benefits__arrow--left');
    sliderMobile('services', '.service-block', '.services__arrow--right', '.services__arrow--left');
}


timer('10 march 2022', 'order_1');
timer('10 march 2022', 'order_2');

validator();

sendForm('.order-form form[name=action-form]');
sendForm('.order-form form[name=action-form2]');


sendForm('.header-modal form[name=callback-form]');
sendForm('.services-modal form[name=application-form]');

/*console.log(document.querySelector('.order-call-modal form[name=callback-form]'));
console.log(document.querySelector('.order-call-modal form[name=application-form]'));*/




modalImg();
scroolTop();
if (document.title === 'Остекление балконов и лоджий') calculator();

comments();
