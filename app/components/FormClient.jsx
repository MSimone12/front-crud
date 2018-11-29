import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'

import renderField from './default-render-field.js'

class FormClient extends Component {
  render() {
    const {handleSubmit, submitHandler} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Row>
            <Col sm={12}>
              <Field name="nome" label='Nome' component={renderField} required blockLabel type="text" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Field name="cpf" component={renderField} required blockLabel label="CPF" type="text" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <button className="btn btn-primary" type="submit">Enviar</button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

FormClient = reduxForm({
  form: 'FormClient'
})(FormClient)

const mapStateToProps = state => {
  return {
    id: state.clientes.client && state.clientes.client.Id,
    initialValues: {
      nome: state.clientes.client && state.clientes.client.Nome,
      cpf: state.clientes.client && state.clientes.client.CPF
    }
  }
}

FormClient = connect(mapStateToProps)(FormClient)

export default FormClient