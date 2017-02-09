import Marionette from 'backbone.marionette'
import app from './app'
import LayoutView from './views/_Layout'
import HomeView from './views/Home'
import AboutView from './views/About'
import LoginView from './views/Login'
import NotFoundView from './views/NotFound'

const Router = Marionette.AppRouter.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'login': 'login',
    '*404': 'notFound'
  },

  home () {
    layout({
      title: 'Home',
      view: new HomeView()
    })
  },

  about () {
    layout({
      title: 'About',
      view: new AboutView()
    })
  },

  login () {
    root({
      title: 'Login',
      view: new LoginView()
    })
  },

  notFound () {
    root({
      title: '404',
      view: new NotFoundView()
    })
  }
})

/**
 * The `viewInstance passed to this method will be rendered
 * to the root of the application.
 */

function root (opts) {
  document.title = `Marionette Starter - ${opts.title}`
  app.showView(opts.view)
}

/**
 * The `viewInstance` passed to this method will be rendered
 * within the `LayoutView`.
 */

function layout (opts) {
  var layoutView = new LayoutView()

  root({
    title: opts.title,
    view: layoutView
  })

  layoutView.showChildView('content', opts.view)
}

const router = new Router()

export default router
