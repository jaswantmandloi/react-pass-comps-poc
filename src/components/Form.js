import React, { useState, useRef } from 'react'
import { onFormStateChange } from 'utils/formUtils'
import InputGroup from 'components/InputGroup'

const onSignInSubmit = ({ values, errors, setFormState, dependencies }) => {
  console.log('submitted...')
}

const onSignInValidate = ({ values, dependencies }) => {
  const newErrors = {}
  if (!values.userId) {
    newErrors.userId = 'Error user'
  }

  if (!values.password) {
    newErrors.password = 'Error Password'
  }

  return newErrors
}

const Form = () => {
  const values = useRef({
    userId: '',
    password: ''
  }).current

  // const ele = useRef(null)

  const [formState, setFormState] = useState({
    errors: {},
    dirties: {},
    signInErrorMessage: ''
  })

  const stateChangeData = {
    onSubmit: onSignInSubmit,
    onValidate: onSignInValidate,
    values,
    dependencies: { },
    errors: formState.errors,
    setFormState: setFormState,
    dirties: formState.dirties
  }

  // console.log('values', values)

  // const { signInErrorMessage } = formState

  const formEventHandler = event => {
    onFormStateChange(event, stateChangeData)
  }

  const inputProps = {
    // value: values.userId
  }

  return (
    <div>
      <form onSubmit={formEventHandler} noValidate>
        <div>
          <input
            {...inputProps}
            type="text"
            name="userId"
            id="userId"
            defaultValue="jm"
            // value={values.userId}
            onBlur={event => {
              console.log('onBlur', event.target.value)
              formEventHandler(event)
            }}
            onChange={event => {
              // console.log('onChange userid', event.target.value)
            }}
            // onChange={formEventHandler}
            // errors={formState.errors}
            // dirties={formState.dirties}
            // data-test="userid"
          />
        </div>

        <div>
          {formState.dirties.userId && formState.errors.userId && (
            <label>{formState.errors.userId}</label>
          )}
        </div>

        <InputGroup
          onBlur={event => {
            console.log('onBlur password', event.target.value)
            formEventHandler(event)
          }}
          defaultValue={''}
          dirties={formState.dirties}
          errors={formState.errors}
          name="password"
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
