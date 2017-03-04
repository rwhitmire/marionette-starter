import 'jquery-validation'
import { Application } from 'backbone.marionette'
import LoginView from './index'

const Fixture = Application.extend({
  region: 'body'
})

const fixture = new Fixture()

describe('LoginView', () => {
  it('should render', () => {
    const view = new LoginView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })

  it('should display validation errors', () => {
    const view = new LoginView()
    fixture.showView(view)
    view.ui.form.submit()
    expect(view.$el.html()).toContain('This field is required.')
  })
})
