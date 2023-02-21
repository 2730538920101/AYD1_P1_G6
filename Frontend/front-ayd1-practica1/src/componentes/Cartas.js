import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function Cartas(props) { 

    async function eliminarFavo() {
        console.log(props.id + " " + props.nombre + " " + props.apellido + " " + props.telefono + " " + props.correo)
    }

  return (  
      <Card>
        <Card.Content>
          <Card.Header>Nombre: {props.nombre} {props.apellido}</Card.Header>
          <Card.Description>
            <strong>Correo: {props.correo}</strong>
            <br/>
            <strong>Número: {props.telefono}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'> 
            <Button basic color='red' onClick={eliminarFavo}>
              ELIMINAR DE FAVORITOS
            </Button>
          </div>
        </Card.Content>
      </Card> 
  )
}

export default Cartas