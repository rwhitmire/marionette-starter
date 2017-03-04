import { history } from 'backbone'
import { View } from 'backbone.marionette'
import { serialize } from 'backbone.syphon'
import template from './index.hbs'

const LoginView = View.extend({
  template,

  ui: {
    form: 'form',
    username: '[name="username"]'
  },

  events: {
    'submit @ui.form': 'handleSubmit'
  },

  onAttach () {
    this.ui.form.validate()
    this.ui.username.focus()
  },

  handleSubmit (e) {
    e.preventDefault()
    console.log('authenticate', serialize(this))
    history.navigate('', { trigger: true })
  }
})

export default LoginView
