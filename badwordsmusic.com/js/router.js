define([
  'jquery',
  'underscore',
  'backbone',
  'views/app'
], function($, _, Backbone, AppView) {
  var AppRouter = Backbone.Router.extend({
    initialize: function () {
      var appView = new AppView();
      appView.render();
    }
  });

  return {
    initialize: function () {
      var appRouter = new AppRouter();
    }
  };
});