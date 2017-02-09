import { Model } from 'backbone'
import { View } from 'backbone.marionette'
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

  onRender () {
    this.bindField('username')
    this.bindField('password')
  },

  onAttach () {
    this.ui.username.focus()
  },

  bindField (prop) {
    this.$(`[name="${prop}"]`)
      .val(this.model.get(prop))
      .on('change', e => this.model.set(prop, e.target.value))
  },

  handleSubmit (e) {
    e.preventDefault()
    this.model.authenticate()
  }
})

export default LoginView
