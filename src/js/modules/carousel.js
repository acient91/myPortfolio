import $ from "jquery";
import "slick-carousel"
import mixitup from "mixitup";
const carousel = () => {

  $('.blog__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button"class="slick-prev"><svg width="26" height="60" viewBox="0 0 26 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M25.625 54.6462V59.1462H23.625C18.4375 59.1462 14.9583 58.3754 13.1875 56.8337C11.4375 55.2921 10.5625 52.2192 10.5625 47.615V40.1462C10.5625 37.0004 10 34.8233 8.875 33.615C7.77083 32.4067 5.76042 31.8025 2.84375 31.8025H0.90625V27.3337H2.84375C5.78125 27.3337 7.80208 26.74 8.90625 25.5525C10.0104 24.365 10.5625 22.2087 10.5625 19.0837V11.5837C10.5625 6.97957 11.4375 3.91707 13.1875 2.39624C14.9583 0.854574 18.4375 0.0837402 23.625 0.0837402H25.625V4.55249H23.4375C20.5208 4.55249 18.6146 5.01082 17.7188 5.92749C16.8438 6.82332 16.4062 8.75041 16.4062 11.7087V19.4587C16.4062 22.7296 15.9271 25.1046 14.9688 26.5837C14.0312 28.0629 12.4167 29.0629 10.125 29.5837C12.4375 30.1462 14.0625 31.1671 15 32.6462C15.9375 34.1254 16.4062 36.49 16.4062 39.74V47.49C16.4062 50.4692 16.8438 52.4067 17.7188 53.3025C18.6146 54.1983 20.5208 54.6462 23.4375 54.6462H25.625Z" fill="#8091A0"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="26" height="60" viewBox="0 0 26 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M0.375 54.6462V59.1462H2.375C7.5625 59.1462 11.0417 58.3754 12.8125 56.8337C14.5625 55.2921 15.4375 52.2192 15.4375 47.615V40.1462C15.4375 37.0004 16 34.8233 17.125 33.615C18.2292 32.4067 20.2396 31.8025 23.1562 31.8025H25.0938V27.3337H23.1562C20.2188 27.3337 18.1979 26.74 17.0938 25.5525C15.9896 24.365 15.4375 22.2087 15.4375 19.0837V11.5837C15.4375 6.97957 14.5625 3.91707 12.8125 2.39624C11.0417 0.854574 7.5625 0.0837402 2.375 0.0837402H0.375V4.55249H2.5625C5.47917 4.55249 7.38542 5.01082 8.28125 5.92749C9.15625 6.82332 9.59375 8.75041 9.59375 11.7087V19.4587C9.59375 22.7296 10.0729 25.1046 11.0312 26.5837C11.9688 28.0629 13.5833 29.0629 15.875 29.5837C13.5625 30.1462 11.9375 31.1671 11 32.6462C10.0625 34.1254 9.59375 36.49 9.59375 39.74V47.49C9.59375 50.4692 9.15625 52.4067 8.28125 53.3025C7.38542 54.1983 5.47917 54.6462 2.5625 54.6462H0.375Z" fill="#9EFFFF"/></svg></button>',
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    }]
  });

  mixitup('.portfolio__list')

}
export default carousel;