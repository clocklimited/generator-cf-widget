var BaseModel = require('cf-base-model')
  , schemata = require('../../../../service/widget/model/base-widget')()

module.exports = BaseModel.extend(
  { schemata: schemata
  , defaults: function () {
      return schemata.makeDefault({ type: this.type || '<%= widgetId %>' })
    }
  , validate: function (attributes) {
      var returnValue = {}

      schemata.validate(schemata.cast(attributes), function (error, errors) {
        returnValue = errors
      })

      return (Object.keys(returnValue).length > 0) ? returnValue : undefined
    }
  })
