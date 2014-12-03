define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, AppRouter) {
  return {
    initialize: function () {
      new AppRouter();
      Backbone.history.start();
    }
  };
});