import Marionette from 'backbone.marionette'

const App = Marionette.Application.extend({
  region: 'body'
})

const app = new App()

export default app
