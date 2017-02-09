import NotFoundView from './index'

describe('NotFoundView', () => {
  it('should render', () => {
    const view = new NotFoundView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })
})
