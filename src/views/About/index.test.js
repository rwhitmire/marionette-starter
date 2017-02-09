import AboutView from './index'

describe('AboutView', () => {
  it('should render', () => {
    const view = new AboutView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })
})
