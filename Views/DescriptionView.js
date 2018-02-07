var DescriptionView = Backbone.View.extend({

  className: 'main-description',

  template: Handlebars.compile($('#description-template').html()),

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});
