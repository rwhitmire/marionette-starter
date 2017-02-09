import LoginView from './index'

describe('LoginView', () => {
  it('should render', () => {
    const view = new LoginView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })
})
