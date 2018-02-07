var MainVideoView = Backbone.View.extend({

  className: 'main-video',

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});
