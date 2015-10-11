var compileJade = require('browjadify-compile')
  , template = compileJade(__dirname + '/../templates/form.jade')
  , BaseWidgetView = require('../../../widget/views/form/base')
  , debug = require('../../../../../admin/source/js/lib/debug')('<%= widgetId %> view')

module.exports = BaseWidgetView.extend(
  { template: template
  , debug: debug
  })
