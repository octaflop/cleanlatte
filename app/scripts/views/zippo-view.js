cleanlatte.Views.zippoView = Backbone.View.extend({

  // template: zippo
  template: "#photoItem",
  tagName: "li",

  initialize: function() {
    cleanlatte.Templates.zippo = cleanlatte.Templates.zippo ||
      _.template($(this.template).html());

      this.render();
  },
  render: function() {
    var html = cleanlatte.Templates.zippo(this.model.toJSON());
    this.$el.html(html);
  }

});
