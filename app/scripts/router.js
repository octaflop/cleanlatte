define([
  // Application.
  "app",

  // Application routes
  "routes/application-router"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
  // routes: {
  //   "": "main",
  //   "tags/:tags": "tags"
  // },
  // initialize: function() {
  //   this.appView = new cleanlatte.Views.applicationView();
  //   this.flickr = new cleanlatte.Views.flickrView();
  // },
  // main: function() {

  // },
  // tags: function(tags) {
  //   cleanlatte.Vent.trigger("reload", tags);
  // }
    routes: {
      "": "index",
      // "tags/:tags": "tags"
    },

    index: function() {

    }
  });

  return Router;

});
