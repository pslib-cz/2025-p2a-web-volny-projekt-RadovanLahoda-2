import "normalize.css";
import "../style/style.css";

import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Říkáme Swiperu, ať zapne modul pro šipky
  modules: [Navigation, Pagination], 
  
  direction: 'horizontal',
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});