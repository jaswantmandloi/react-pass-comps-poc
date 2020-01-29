import React, { useState } from 'react'
import Button from './Button'
import { convertInputValue, otherConvertInputValue } from '../utils/inputUtils'
let lastCallback = null
const Input = () => {
  const [value, setValue] = useState('')
  console.log('lastCallback === setValue', lastCallback === setValue)
  lastCallback = setValue

  console.log('Input rendering 12', value)

  convertInputValue()
  otherConvertInputValue()

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
      <Button />
    </div>
  )
}

export default Input
