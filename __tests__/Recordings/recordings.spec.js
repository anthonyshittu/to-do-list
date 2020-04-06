/* eslint-disable no-undef */
import * as React from 'react'
import { mount } from 'enzyme'
import Recordings from '../../src/container/Recordings'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const state = {
  recordings: {}
}
const store = mockStore(() => state)
describe('Recordings Container', () => {
  describe('Empty Recordings List', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Recordings />
      </Provider>
    )
    it('should render warning notification', () => {
      expect(wrapper.find('.notification').length).toBe(1)
    })
  })
  describe('component with props', () => {
    const state = {
      recordings: {
        "k8nqb9ey": {
          "id": "k8nqb9ey",
          "currentItems": [
            "k8norhfg",
            "k8nov22t"
          ],
          "recordedIDs": [
            {
              "id": "k8nqbq37",
              "recorded_at": 1586132479711,
              "action": "add"
            }
          ],
          "createdAt": 1586132458089
        }
      }
    }
    const store = mockStore(() => state)
    const wrapper = mount(
      <Provider store={store}>
        <Recordings />
      </Provider>
    )
    it('should render one recording ', () => {
      expect(wrapper.find('.recordings__container').length).toBe(1)
    })
  })
})