import { modal } from "./modules/modal";
import { sliderMobile, sliderDesktop } from "./modules/slider";

modal('.header-modal', '.button', '.header-modal__close', 1);
modal('.services-modal', '.service-button', '.services-modal__close', 4);

if (document.documentElement.clientWidth > 576) {
    sliderDesktop('benefits', '.benefits__item', 3, '.benefits__arrow--right', '.benefits__arrow--left');
    sliderDesktop('services', '.service-block', 2, '.services__arrow--right', '.services__arrow--left');
} else {
    sliderMobile('benefits', '.benefits__item', '.benefits__arrow--right', '.benefits__arrow--left');
    sliderMobile('services', '.service-block', '.services__arrow--right', '.services__arrow--left');
}
