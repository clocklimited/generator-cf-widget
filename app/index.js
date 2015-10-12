'use strict'

var generators = require('yeoman-generator')
  , chalk = require('chalk')
  , slugg = require('slugg')
  , camelCase = require('camel-case')
  , path = require('path')
  , CfWidgetGenerator

CfWidgetGenerator = generators.Base.extend(
  { prompting: function () {
      this.log(chalk.magenta('Catfish widget generator.'))

      var done = this.async()
        , prompts =
          [ { name: 'name'
            , message: 'What is the name of your widget (human readable)?'
            }
          , { name: 'description'
            , message: 'Describe your widget.'
            }
          , { name: 'admin'
            , message: 'Do you need an admin widget?'
            , default: 'yes'
            }
          , { name: 'section'
            , message: 'Widget can appear in sections layouts?'
            , default: 'yes'
            }
          , { name: 'article'
            , message: 'Widget can appear in article layouts?'
            , default: 'yes'
            }
          ]

      this.prompt(prompts, function (answers) {
        this.widgetName = answers.name
        this.widgetId = camelCase(answers.name)
        this.widgetFilename = slugg(answers.name)
        this.widgetDescription = answers.description
        this.createAdminWidget = answers.admin === 'yes'
        this.adminFactories = []
        this.siteFactories = [ 'widgetFactory' ]
        if (answers.section) {
          this.adminFactories.push('widgetFactory')
        }
        if (answers.article) {
          this.adminFactories.push('articleLayoutWidgetFactory')
        }
        done()
      }.bind(this))
    }

  , createWidget: function () {
      var adminDir = 'components/admin/widgets/' + this.widgetFilename
        , siteDir = 'components/site/widgets/' + this.widgetFilename

      if (this.createAdminWidget) {
        this.template('admin/_init.js', path.join(adminDir, 'init.js'))
        this.template('admin/models/_model.js', path.join(adminDir, 'models/model.js'))
        this.template('admin/templates/_form.jade', path.join(adminDir, 'templates/form.jade'))
        this.template('admin/views/_form.js', path.join(adminDir, 'views/form.js'))
      }

      this.template('site/_init.js', path.join(siteDir, 'init.js'))
      this.copy('site/templates/widget.jade', path.join(siteDir, 'templates/widget.jade'))
      this.copy('site/test/template.test.js', path.join(siteDir, 'test/template.test.js'))
      this.copy('site/views/widget.js', path.join(siteDir, 'views/widget.js'))
    }
  })

module.exports = CfWidgetGenerator
