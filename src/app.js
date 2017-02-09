import Marionette from 'backbone.marionette'

const App = Marionette.Application.extend({
  region: '#app'
})

const app = new App()

export default app
