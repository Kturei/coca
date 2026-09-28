import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export const useInsinghtSlider = () => {
  new Swiper('.insinght__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    speed: 800, // плавный переход
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      993: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    },
  });
};
