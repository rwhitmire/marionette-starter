import { Model } from 'backbone'
import { View } from 'backbone.marionette'
import { serialize } from 'backbone.syphon'
import template from './index.hbs'

var LoginModel = Model.extend({
  defaults: {
    username: '',
    password: ''
  },

  authenticate () {
    console.log('authenticate!', this.attributes)
  }
})

const LoginView = View.extend({
  template,

  events: {
    'submit form': 'handleSubmit'
  },

  ui: {
    username: '[name="username"]'
  },

  initialize () {
    this.model = new LoginModel()
  },

  onAttach () {
    this.ui.username.focus()
  },

  handleSubmit (e) {
    e.preventDefault()
    this.model.set(serialize(this))
    this.model.authenticate()
  }
})

export default LoginView
