var VideoCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&&type=video&key=AIzaSyCS1A4Owb1LBGQsS6IahvWtyP4L4KmkSNY&q=`,
  model: VideoModel,

  parse: function(response) {
    return response.items
  }
});
