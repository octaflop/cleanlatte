cleanlatte.Routers.ApplicationRouter = Backbone.Router.extend({
  routes: {
    "": "main",
    "tags/:tags": "tags"
  },
  initialize: function() {
    this.appView = new cleanlatte.Views.applicationView();
    this.flickr = new cleanlatte.Views.flickrView();
  },
  main: function() {

  },
  tags: function(tags) {
    cleanlatte.Vent.trigger("reload", tags);
  }

});
