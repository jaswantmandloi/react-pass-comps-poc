import React, { useState } from 'react'

const Input = () => {
  const [value, setValue] = useState('')
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
