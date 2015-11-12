var BaseModel = require('cf-base-model')
  , schemata = require('../../../../service/widget/model/base-widget')()
  , validateDelegate = require('../../../../../admin/source/js/lib/validate-delegate')()

module.exports = BaseModel.extend(
  { schemata: schemata

  , defaults: function () {
      return schemata.makeDefault({ type: this.type || '<%= widgetId %>' })
    }

  , validate: validateDelegate
  })
