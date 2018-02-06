var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-query': 'getVideoList'
  },

  initialize: function() {
    this.model.on('change:current_video', this.renderMainVideo, this);
    this.model.on('change:current_video', this.renderSidebar, this);
  },

  getVideoList: function() {
    this.model.get('videos').set(null)
    var transformedQuery = this.$('#search-query').val().replace(/\s/g, "+");
    var newUrl = this.model.get('videos').url + transformedQuery;
    this.model.get('videos').url = newUrl
    this.model.get('videos').fetch({
    success: () => {
        var current_video = this.model.get('videos').models[0]
        this.model.set('current_video',current_video)
    }
})
  },

  renderSidebar: function() {
    var sidebarView = new SidebarView({
      model: this.model
    })
    this.$('.sidebar-container').html(sidebarView.render().el);
  },

  renderMainVideo: function(video) {
    var videoView = new MainVideoView({
      model: this.model.get('current_video')
    })
    this.$('.video-container').html(videoView.render().el);
  },

  fetchVideo: function(video) {
    // video.fetch({
    //   wait: true
    // })
  }

});
