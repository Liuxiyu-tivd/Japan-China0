var tplHome = require('../templates/home.string');

SPA.defineView('home', {
  html: tplHome,

  plugins: ['delegated'],

  //轮播图
  bindEvents: {
    show: function () {
      var mySwiper = new Swiper('#home-swiper1', {
        autoplay:4000,
        loop: false
      });
      var mySwiper2 = new Swiper('#home-swiper2', {
        loop: false,
        autoplay:2000,
        autoplayDisableOnInteraction:false,
        pagination: '.swiper-pagination',
        paginationClickable: true
      });
    }
  }


});
