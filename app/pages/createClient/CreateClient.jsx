import React, { Component } from 'react'
import { connect } from "react-redux"

import * as actions from '../../actions/clients'
import FormClient from '../../components/FormClient'

class CreateClient extends Component {

  submitHandler = fields => {
    this.props.createClient(fields)
  }

  render = () => {
    return (
      <div className="container p-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Create</div>
          </div>
          <div className="card-body">
            <FormClient submitHandler={this.submitHandler.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

CreateClient = connect(() => ({}), actions)(CreateClient)

export default CreateClient