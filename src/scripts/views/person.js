var tplPerson = require('../templates/person.string');

SPA.defineView('person', {
  html: tplPerson,

  plugins: ['delegated'],
  // 点击切换事件
  bindActions: {
    'tap.tab': function (e) {
      $(e.el).addClass('active').siblings().removeClass('active');
      console.log(e);
      $('.person-tab').eq($(e.el).index()).css('display','block').siblings('.person-tab').css('display','none');
    }


  }



});
