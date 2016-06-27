// 引入spa类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');



// 引入views
require('./views/index.js');
require('./views/guide.js');
require('./views/home.js');
require('./views/help.js');
require('./views/serch.js');
require('./views/person.js');


// SPA设置
SPA.config({
  indexView: 'index'
});
