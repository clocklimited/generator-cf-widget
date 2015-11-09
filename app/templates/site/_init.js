module.exports = initWidget

var widget = require('./views/widget')

function initWidget () {
  return { <%= widgetId %>: [ 'widgetFactory', init ] }
}

function init (serviceLocator, done) {
<% siteFactories.forEach(function (factoryName) { %>
  serviceLocator.<%= factoryName %>.register('<%= widgetId %>', widget)<% }) %>
  done()
}
