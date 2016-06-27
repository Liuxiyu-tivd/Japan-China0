var tplHelp = require('../templates/help.string');

SPA.defineView('help', {
  html: tplHelp,

  plugins: ['delegated']


});
