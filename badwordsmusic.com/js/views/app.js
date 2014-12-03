define([
  'jquery',
  'underscore',
  'backbone',
  'text!template/app.html'
], function($, _, Backbone, template) {
  var AppView = Backbone.View.extend({
    el: $('.container'),
    render: function () {
      var viewTemplate = _.template(template);
      this.$el.append(viewTemplate);
    }
  });

  return AppView;
});