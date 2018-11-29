import React, { Component } from 'react'
import { FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap'

class DefaultComponentFrame extends Component {

  render = () => {
    const { touched, name, success, error, children } = this.props
    return (
      <FormGroup controlId={name} validationState={error && touched ? "error" : success ? "success" : null}>
        {children}
      </FormGroup>
    )
  }
}

class DefaultErrorMessage extends Component {

  render = () => {
    const { touched, active, error, name } = this.props
    return touched && error ? <div className="col-sm-12 mt-sm text-red" data-test={"error-" + name}>{typeof error  === 'string' ? error : ''}</div> : <div></div>
  }

}

class DefaultLabel extends Component {

  render = () => {
    const { name, label, required } = this.props
    return <ControlLabel htmlFor={name} style={{ textAlign: "left" }}>{label + (required ? '*' : ' (opcional)')}</ControlLabel>
  }

}

const preventSubmitOnEnter = event => {
  if (event.key === 'Enter') event.preventDefault()
}

const renderField = componentOptions => {
  let { input, hasLoading, type, blockLabel, componentClass, componentProps, success, loading, required, meta, dataTest } = componentOptions
  let { name, onKeyPress } = input
  onKeyPress = onKeyPress ? onKeyPress : preventSubmitOnEnter
  const entity = componentOptions.entity ? componentOptions.entity : {}
  let label, placeholder = null
  label = componentOptions.label ? componentOptions.label : entity.label
  placeholder = componentOptions.placeholder ? componentOptions.placeholder : entity.placeholder
  input = { ...input, onKeyPress, placeholder }
  const labelControl = <DefaultLabel {...{ name, label, required }} />
  const inputControl = <FormControl {...input} {...componentProps} type={type} componentClass={componentClass ? componentClass : "input"} data-test={dataTest} />
  const errorMessageControl = <DefaultErrorMessage {...meta} name={name} />

  return (
    <div className="">
      <DefaultComponentFrame {...{ ...meta, success, name }} className="has-feedback">
        {
          blockLabel ? (
            <div>
              <div>
                {labelControl}
                {inputControl}
              </div>
              <div>
                {errorMessageControl}
              </div>
            </div>
          ) : (
              <div>
                <Col sm={2}>
                  {labelControl}
                </Col>
                <Col sm={10}>
                  {inputControl}
                </Col>
                {errorMessageControl}
              </div>
            )
        }
      </DefaultComponentFrame>
    </div>
  )
}

export default renderField
