import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-info">
            <a className="navbar-brand" href="/">Crud Clientes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">Novo Cliente</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
