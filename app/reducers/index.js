import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import clientes from './clientes'

const rootReducer = combineReducers({
  form,
  clientes
})

export default rootReducer