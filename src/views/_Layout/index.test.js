import LayoutView from './index'

describe('LayoutView', () => {
  it('should render', () => {
    const view = new LayoutView()
    view.render()
    expect(view.$el.html()).toBeTruthy()
  })
})
