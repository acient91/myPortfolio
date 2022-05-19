//Импорт модуля
import calculator from "./modules/calculator.js";
import homeScroll from "./modules/homeScroll.js";
import carousel from './modules/carousel.js';
import weather from './modules/weather.js';
import toDo from './modules/to-do.js';
//Вызов функции из модуля
calculator();
homeScroll();
carousel();
weather();
toDo();

//Пример подключения библиотек из node-modules
// import Swiper, {Navigation, Pagination} from 'swiper';
// const swiper = new Swiper();