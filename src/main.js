
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules'

import "normalize.css";
import "../style/style.css";
import "../style/swiper.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (document.querySelector('.swiper')) {

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: "horizontal",
  slidesPerView: 1.5,
  centeredSlides: true,
  effect: "slide",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

}