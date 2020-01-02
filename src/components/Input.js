import React, { useState } from 'react'
let lastCallback = null
const Input = () => {
  const [value, setValue] = useState('')
  console.log('lastCallback === setValue', lastCallback === setValue)
  lastCallback = setValue

  console.log('Input rendering', value)
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
    </div>
  )
}

export default Input
