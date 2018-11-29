import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux"

import * as actions from '../../actions/clients'
import FormClient from '../../components/FormClient'

class UpdateClient extends Component {

  submitHandler = fields => {
    fields = Object.assign({id: this.props.client.Id}, fields)
    this.props.updateClient(fields)
  }

  render = () => {
    const { client } = this.props
    return client ? (
      <div className="container p-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Update</div>
          </div>
          <div className="card-body">
            <FormClient submitHandler={this.submitHandler.bind(this)} />
          </div>
        </div>
      </div>
    )  : <h1>Cliente Inválido</h1>
  }
}

const mapStateToProps = state => {
  return {
    client: state.clientes.client
  }
}

UpdateClient = connect(mapStateToProps, actions)(UpdateClient)

export default UpdateClient