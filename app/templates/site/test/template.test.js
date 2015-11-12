var compileJade = require('../../../../../site/lib/compile-jade')
  , template = compileJade(__dirname + '/../templates/widget.jade')
  , assert = require('assert')
  , cheerio = require('cheerio')
  , mockData = { widget: { displayOptions: [] } }

describe('<%= widgetName %> Widget: Template', function () {

  describe('Widget', function () {

    it('should extend the default widget template', function () {
      var $ = cheerio.load(template(mockData))
      assert.equal($('.widget__wrapper').length, 1)
    })

  })

})
