import React from 'react'

const InputGroup = ({ onBlur, defaultValue, dirties, errors, name }) => {
  return (
    <>
      <div>
        <input
          type="text"
          name={name}
          onChange={event => {
            // console.log(`onChange ${name}`, event.target.value)
          }}
          defaultValue={defaultValue}
          // value={defaultValue}
          onBlur={onBlur}
        />
      </div>
      <div>
        {dirties[name] && errors[name] && <label>{errors[name]}</label>}
      </div>
    </>
  )
}

export default InputGroup
