var VideoModel = Backbone.Model.extend({
  defaults: {
    // title: '',
    // description: '',
    // thumbnail: '',
    // player:'',
    // video_id: ''
  },

  parse: function(response) {
    this.set('title',response.snippet.title);
    this.set('video_id',response.id.video_id);
    this.set('description',response.snippet.description);
    this.set('thumbnail',response.snippet.thumbnails.high.url);
    return this
    }
});
