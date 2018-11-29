import * as types from '../constants/types'

export const clientsReceived = clients => ({ type: types.CLIENTS_RECEIVED, clients })

export const clientReceived = client => ({ type: types.CLIENT_RECEIVED, client })