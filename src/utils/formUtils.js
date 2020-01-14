const checkValidation = ({
  values,
  setFormState,
  onValidate,
  dirties,
  dependencies
}) => {
  const returnedErrors = onValidate({ values, dependencies })
  let dirtyFields = dirties
  if (dirties === null) {
    dirtyFields = {}
    Object.keys(returnedErrors).forEach(fieldName => {
      dirtyFields[fieldName] = true
    })
  }

  /** Optimise re-rendering with object shallow cheking */
  // if (returnedErrors !== errors) {

  // }

  setFormState({ errors: returnedErrors, dirties: dirtyFields })

  return returnedErrors
}

export const onFormStateChange = (event, stateChangeData) => {
  const { target } = event
  const {
    onSubmit,
    onValidate,
    values,
    errors,
    setFormState,
    dirties,
    dependencies
  } = stateChangeData

  if (target.nodeName === 'FORM') {
    event.preventDefault()
    const returnedErrors = checkValidation({
      values,
      setFormState,
      onValidate,
      dependencies,
      dirties: null
    })

    onSubmit({ ...stateChangeData, errors: returnedErrors })
    return { values, errors }
  }

  let fieldValue = null
  if (target.nodeName === 'INPUT' && target.type === 'text') {
    fieldValue = target.value
  } else if (target.nodeName === 'INPUT' && target.type === 'checkbox') {
    fieldValue = !!target.checked
  } else if (target.nodeName === 'INPUT' && target.type === 'password') {
    fieldValue = target.value
  }

  if (target.name) {
    values[target.name] = fieldValue
    dirties[target.name] = true
  }

  const returnedErrors = checkValidation(stateChangeData)

  return { values, errors: returnedErrors }
}
