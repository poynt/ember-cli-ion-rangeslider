/* jshint node: true */
'use strict';

const packagedSkins = {
  'flat':   ['flat.less'],
  'big':    ['big.less'],
  'modern': ['modern.less'],
  'round':  ['round.less'],
  'sharp':  ['sharp.less'],
  'square':  ['square.less'],
};

module.exports = {
  name: 'ember-cli-ion-rangeslider',

  envConfig: function(){
    return this.project.config(process.env.EMBER_ENV || 'development');
  },

  importSkin: function(skin, app){
    var skinAssets = packagedSkins[skin.toLowerCase()] || [null, null],
        style = skinAssets[0];

    if (style){
      app.import(app.bowerDirectory + '/ionrangeslider/css/ion.rangeSlider.' + style);
    }
  },

  included: function(app){
    this._super.included(app);
    var config = this.envConfig()[this.name] || app.options[this.name] || {};

    app.import({
      production: app.bowerDirectory + '/ionrangeslider/js/ion.rangeSlider.min.js',
      development: app.bowerDirectory + '/ionrangeslider/js/ion.rangeSlider.js'
    });
    app.import(app.bowerDirectory + '/ionrangeslider/css/ion.rangeSlider.css');

    // Show something on the screen, when no skin is provided
    // If user set the skin to null explicitly, don't load any assets
    if(typeof(config.skin) === 'undefined'){
      this.importSkin('nice', app); // default skin
    }
    else if (config.skin){
      this.importSkin(config.skin, app);
    }
  }
};
