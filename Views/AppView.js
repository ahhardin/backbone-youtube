var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-query': 'getVideoList',
    'click .read-more': 'readMore',
    'click .read-less': 'readLess'
  },

  initialize: function() {
    this.model.on('change:current_video', this.renderMainVideo, this);
    this.model.on('change:current_video', this.renderFirstSidebar, this);
  },

  getVideoList: function() {
    this.model.get('videos').set(null)
    var transformedQuery = this.$('#search-query').val().replace(/\s/g, "+");
    var newUrl = this.model.get('videos').url + transformedQuery;
    this.model.get('videos').url = newUrl
    this.model.get('videos').fetch({
      success: () => {
        var current_video = this.model.get('videos').models[0]
        this.model.set('current_video', current_video)
      }
    })
  },

  renderFirstSidebar: function() {
    // console.log(this.model.get('videos').get('c4'))
    var sidebarView = new SidebarView({
      model: this.model.get('videos').models[0]
    })
    this.$('.sidebar-container').html(sidebarView.render().el);
    for (i = 1; i < 10; i++) {
      this.renderOtherSidebars(i)
    }
  },

  renderOtherSidebars: function(index) {
    var sidebarView = new SidebarView({
      model: this.model.get('videos').models[index]
    })
    this.$('.sidebar-container').append(sidebarView.render().el);
  },

  renderMainVideo: function(video) {
    var videoView = new MainVideoView({
      model: this.model.get('current_video')
    })
    this.$('.video-container').html(videoView.render().el);
    this.renderDescription()
  },

  readMore: function() {
    this.$('.description-container').html(null)
    this.model.get('current_video').fetch({
      success: () => {
        var currentModel = this.model.get('current_video')
        currentModel.set('description',currentModel.get('extended_description'))
        currentModel.set('extended', true)
        this.renderDescription()
      }
    })
  },

  readLess: function() {
    this.$('.description-container').html(null)
    var currentModel = this.model.get('current_video')
    currentModel.set('description',currentModel.get('short_description'))
    currentModel.set('extended', false)
    this.renderDescription()
  },

  renderDescription: function(showMore) {
    var currentModel = this.model.get('current_video')
    var descriptionView = new DescriptionView({
      model: this.model.get('current_video')
    })
    this.$('.description-container').html(descriptionView.render().el)
    //hide or show the read more/less buttons based on whether the detailed view is shown
    if (currentModel.get('extended')) {
      this.$('.read-more').addClass("hide")
      this.$('.read-less').removeClass("hide")
    }
    else {
      this.$('.read-more').removeClass("hide")
      this.$('.read-less').addClass("hide")
    }
  }


});
