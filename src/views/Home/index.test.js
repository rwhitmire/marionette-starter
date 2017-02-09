import HomeView from './index'

describe('HomeView', () => {
  it('should render', () => {
    const view = new HomeView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })
})
