import axios from 'axios'

const getAPI = route => `http://localhost:4001${route}`

export const create = data => {
  return axios.post(getAPI('/create'), data)
}

export const listAllClients = () => {
  return axios.get(getAPI('/clientes')).then(res => {
    console.log(res)
    return res.data
  })
}

export const getClient = id => {
  return axios.post(getAPI(`/client/${id}`)).then(res => res.data)
}

export const update = data => {
  return axios.post(getAPI(`/update/${data.id}`), data)
}

export const deleteById = id => {
  return axios.post(getAPI(`/delete/${id}`))
}