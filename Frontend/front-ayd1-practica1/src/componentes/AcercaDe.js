import React from 'react'

function AcercaDe() {
  return (
    <React.Fragment>
      <h1 styleName={"textAlign:'center'"}>Practica 1 - Grupo 6 - Integrantes</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Carnet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos Roberto Rangel Castillo</td>
            <td>201907636</td>
          </tr>
          <tr>
            <td>Daniel Estuardo Chicas Carías </td>
            <td>201807079</td>
          </tr>
          <tr>
            <td>Carlos Javier Martínez Polanco</td>
            <td>201709282</td>
          </tr>
          <tr>
            <td>Bryan Eduardo Gonzalo Méndez Quevedo</td>
            <td>20181528</td>
          </tr>
          <tr>
            <td>Kevin Josué Calderón Peraza</td>
            <td>201902714</td>
          </tr>
          <tr>
            <td>Daniel Enrique Santos Godoy</td>
            <td>201325512</td>
          </tr>
          <tr>
            <td>Douglas Alexander Soch Catalán</td>
            <td>201807032</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default AcercaDe