// Initialize require.js
require.config({
  paths: {
    jquery: 'vendor/jquery-2.1.1.min',
    underscore: 'vendor/underscore-min-1.7.0',
    backbone: 'vendor/backbone-min-1.1.2',
    template: '../templates',
    views: 'views'
  },

  // Shim declaration
  'shim': {
    'underscore': {
      'exports': '_'
    },
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    }
  }
});

require([
  'app',
], function(App) {
  App.initialize();
});