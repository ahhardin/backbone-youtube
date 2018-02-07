var SidebarView = Backbone.View.extend({

  className: 'sidebar row',

  events: {
    'click': 'changeCurrentVideo'
  },

  changeCurrentVideo: function() {
    appModel.set('current_video',this.model)
  },

  template: Handlebars.compile($('#sidebar-template').html()),

  render: function(num) {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
