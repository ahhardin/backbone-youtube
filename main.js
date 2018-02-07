var appModel = new AppModel();
var appView = new AppView({ model: appModel })


appModel.get('videos').url + "hello";
appModel.get('videos').fetch({
  success: () => {
    var current_video = appModel.get('videos').models[0]
    appModel.set('current_video', current_video)
  }
})
