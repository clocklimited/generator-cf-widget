module.exports = render

var compileJade = require('../../../../../site/lib/compile-jade')
  , template = compileJade(__dirname + '/../templates/widget.jade')

function render (serviceLocator, req, section, article, widget, cb) {
  try {
    cb(null, template({ widget: widget }))
  } catch (e) {
    return cb(e)
  }
}
