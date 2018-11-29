import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as types from '../constants/types'

const initialState = {
  clients: [],
  client: null
}

const clientes =  (state = initialState, action) => {
  const { client, clients } = action

  switch (action.type) {
    case types.CLIENTS_RECEIVED:
      return {
        ...state,
        clients
      }

    case types.CLIENT_RECEIVED: 
      return {
        ...state,
        client
      }
  }

  return state
}

export default persistReducer({
    key: 'clientes',
    whitelist: ['clients', 'client'],
    storage
  },
  clientes)