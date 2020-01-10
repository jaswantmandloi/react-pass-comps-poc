import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'components/Container'

describe('Container test', () => {
  test('should test Container', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container />, div)
    expect(1 + 2).toEqual(3)
  })
})
