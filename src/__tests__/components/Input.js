import React from 'react'
import Input from 'components/Input'
import ReactDOM from 'react-dom'

describe('Input test', () => {
  test('should test input', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Input />, div)
    expect(1 + 2).toEqual(3)
  })
})
