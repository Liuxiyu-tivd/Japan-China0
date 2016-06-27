var tplSerch = require('../templates/serch.string');
var util = require('../utils/fn.js');
SPA.defineView('serch', {
  html: tplSerch,

  plugins: ['delegated'],

  init: {
    vm: null,
    livelistArray: [],
    homeSwiper: null,
    homeHotSwiper: null,
    formatData: function (arr) {
      var tempArr = [];
      for (var i = 0; i < Math.ceil(arr.length/2); i++) {
        tempArr[i] = [];
        tempArr[i].push(arr[2*i]);
        tempArr[i].push(arr[2*i+1]);
      }
      return tempArr;
    }
  },
  // 横向scroll
  bindEvents: {
    show: function () {
      var lifenavScroll = this.widgets['serch-scroll'];
      lifenavScroll.options.scrollX = true;
      lifenavScroll.options.scrollY = false;
      // console.log(sa.animate);

      // 创建swiper对象
      var that = this;
      that.serchSwiper = new Swiper('#serch-swiper', {
        loop: false,

        onSlideChangeStart: function (swiper) {
          var index = swiper.activeIndex;
          var $lis = $('.m-serch .m-lifenav li');
          util.setFocus($lis.eq(index));
        },
        // freeMode : true,
        // freeModeMomentum : false
//         scrollContainer: true,  
//         scrollbar: {  
//         container: '.swiper-scrollbar'  
//     }  
      });

    }
  },
  // 点击切换事件
  bindActions: {
    'tap.serch.slide': function (e, data) {
      this.serchSwiper.slideTo($(e.el).index());
    }


  },


});
