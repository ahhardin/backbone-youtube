var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-query': 'getVideoList'
  },

  initialize: function () {
    // this.listenTo(this.model.get('videos'), 'add', this.renderSidebar);
    // this.listenTo(this.model,'change:current_video', this.renderMainVideo);
  },

  getVideoList: function () {
    var transformedQuery = this.$('#search-query').val().replace(/\s/g, "+");
    var newUrl = this.model.get('videos').url+transformedQuery;
    this.model.get('videos').url = newUrl
    this.model.get('videos').fetch({ wait: true });
    console.log(this.model)
  },

  renderSidebar: function () {
  // if (this.detailView) {
  //   this.detailView.remove();
  // }
  //
  // // this.detailView = new BeerDetailView({ model: this.model.get('current_beer')});
  // //
  // // this.$('.reviews-container').append(this.sidebarView.render().el);
},

  renderMainVideo: function (beer) {
  //   var beerView = new MainVideoView({ model: video });
  //   this.$('.beer-list').append(beerView.render().el);
  // },
}

});
