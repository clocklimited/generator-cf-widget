module.exports = initWidget

function initWidget () {
  return { <%= widgetId %>Widget: init }
}

function init (serviceLocator, done) {

  var widget =
    { editView: require('./views/form')
    , model: require('./models/model')
    , itemView: require('../../widget/views/item/edit-base')
    , name: '<%= widgetName %>'
    , description: '<%= widgetDescription %>'
    }
  <% adminFactories.forEach(function (factoryName) { %>
  serviceLocator.<%= factoryName %>.register('<%= widgetId %>', widget)<% }) %>

  done()
}
