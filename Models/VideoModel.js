var VideoModel = Backbone.Model.extend({
  defaults: {
    extended: false,
    title: '',
    description: '',
    thumbnail: '',
    player: '',
    video_id: '',
    player: '',
    extended_description:''
  },

  parse: function(response) {
    if (this.urlRoot) {
      var description = response.items[0].snippet.description;
      return {'extended_description': description}
    } else {
      var title = response.snippet.title;
      var video_id = response.id.videoId;
      var description = response.snippet.description;
      var thumbnail = response.snippet.thumbnails.high.url;
      this.urlRoot = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCS1A4Owb1LBGQsS6IahvWtyP4L4KmkSNY&part=player,snippet&id=" + video_id
      return {
        'title': title,
        'video_id': video_id,
        'short_description': description,
        'thumbnail': thumbnail,
        'description': description
      }
    }
  }
});
