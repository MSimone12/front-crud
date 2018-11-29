import * as actionCreator from './actionCreator'
import * as clientManager from '../facade/clients'
import {push} from 'react-router-redux'

export const setClientList = () => {
  return dispatch => {
    dispatch(actionCreator.clientReceived([]))
    dispatch(actionCreator.clientReceived(null))
    return clientManager.listAllClients()
    .then(clientList => dispatch(actionCreator.clientsReceived(clientList)))
  }
}

export const setClient = client => {
  return dispatch => {
    dispatch(actionCreator.clientReceived(client))
  }
}

export const redirect = route => {
  return dispatch => {
    dispatch(push(route))
  }
}

export const updateClient = client => {
  return dispatch => {
    return clientManager.update(client)
    .then(() => redirect('/')(dispatch))
  }
} 

export const createClient = client => {
  return dispatch => {
    return clientManager.create(client)
    .then(() => redirect('/')(dispatch))
  }
}

export const deleteClient = id => {
  return dispatch => {
    return clientManager.deleteById(id)
      .then(() => redirect('/')(dispatch))
  }
}