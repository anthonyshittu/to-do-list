/* eslint-disable no-undef */
import * as React from 'react'
import { mount } from 'enzyme'
import Todo from '../../src/container/todo'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
describe('Todo Container', () => {
  describe('Empty Todo List', () => {
    const state = {
      todos: {}
    }
    const store = mockStore(() => state)
    const wrapper = mount(
      <Provider store={store}>
        <Todo />
      </Provider>
    )
    it('should render warning notification', () => {
      expect(wrapper.find('.notification').length).toBe(1)
    })
    it('should add and record buttons', () => {
      expect(wrapper.find('.svg').length).toBe(2)
    })
  })
  describe('component with props', () => {
    const state = {
      todos: {
        "k8norhfg": {
          "id": "k8norhfg",
          "createdAt": 1586129855739,
          "name": "Test Name",
          "desc": "Test Description"
        },
        "k8nov22t": {
          "id": "k8nov22t",
          "createdAt": 1586130022468,
          "name": "Test Name 1",
          "desc": "Test Description 2"
        }
      }
    }
    const store = mockStore(() => state)
    const wrapper = mount(
      <Provider store={store}>
        <Todo />
      </Provider>
    )
    it('should render two todo ', () => {
      expect(wrapper.find('.todo__container').length).toBe(2)
    })
    it('on edit button click on first todo', () => {
      wrapper.find('.button').at(1).simulate('click')
      expect(wrapper.find('.modal').length).toBe(1)
      expect(wrapper.find('input').get(2).props.defaultValue).toBe('Test Name')
    })
  })
})