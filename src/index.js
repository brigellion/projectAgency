import { modal } from "./modules/modal";
import { sendForm } from "./modules/sendForm";
import { sliderMobile, sliderDesktop } from "./modules/slider";
import { timer } from "./modules/timer";
import { validator } from "./modules/validator";
import { form } from "./modules/sendForm";

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