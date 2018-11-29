import React, { Component } from 'react'
import {connect} from 'react-redux'
import {conformToMask} from 'react-text-mask'

import * as actions from '../../actions/clients'

const mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

class ClientList extends Component {

  componentWillMount = () => {
    this.props.setClientList()
  }

  setClientUpdate = client => {
    this.props.setClient(client)
    this.props.redirect('/update')
  }

  setClientDelete = client => {
    const conf = confirm(`Deseja Deletar o cliente ${client.Nome}?`)
    if(conf) {
      this.props.deleteClient(client.Id)
    }
  }

  render = () => {
    const { clients } = this.props
    return clients.length ? (
      <div className="container">
        <div className="row">
        <h1>Clientes</h1>
        {
          clients.map(client => {
            console.log(client)
            const collapse = `collapse-${client.Id}`
            const collapseTarget = `#${collapse}`
            const header = `header-${client.Id}}`
            return (
                <div className="col-sm-12">
                  <div id="accordion" className="mt-5">
                  <div className="card" key={client.Id} data-toggle="collapse" data-target={collapseTarget} aria-expanded="false" aria-controls={collapse}>
                      <div className="card-header" id={header}>
                        <div className="d-flex justify-content-between">
                          <h4 className="mb-0">
                            {client.Nome}
                          </h4>
                          <a>
                            <i className="material-icons">add</i>
                          </a>
                        </div>
                      </div>
                      <div id={collapse} className="collapse" data-parent="#accordion" aria-labelledby={header}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>CPF: </strong>
                              {
                                conformToMask(client.CPF, mask).conformedValue
                              }
                            </div>
                            <div>
                              <button className="btn btn-info text-white" onClick={this.setClientUpdate.bind(this, client)}>
                                Editar
                              </button>
                              <button className="btn btn-danger ml-2 text-white" onClick={this.setClientDelete.bind(this, client)}>
                                Excluir
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          })
        }
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="text-center">
          <h1>
            Não há clientes!
          </h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clientes.clients
  }
}

ClientList = connect(mapStateToProps, actions)(ClientList)

export default ClientList