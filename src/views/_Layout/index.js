import { View } from 'backbone.marionette'
import template from './index.hbs'

const LayoutView = View.extend({
  template,

  regions: {
    'content': '[data-region="content"]'
  }
})

export default LayoutView
