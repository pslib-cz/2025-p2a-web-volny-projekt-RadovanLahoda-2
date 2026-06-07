import "normalize.css";
import "../style/style.css";

import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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