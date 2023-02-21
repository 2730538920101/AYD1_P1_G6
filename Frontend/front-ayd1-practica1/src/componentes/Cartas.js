import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function Cartas(props) { 

    async function eliminarFavors() {
        console.log(props.id + " " + props.nombre + " " + props.apellido + " " + props.telefono + " " + props.correo)
    }


    const url = "http://localhost:5000/";

    async function eliminarFavo(id) {

      console.log(id)
      let requestDelete = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
  
      await fetch(`${url}deleteFavorite/${id}`, requestDelete)
        .then((response) => response.json())
        .then((data) => {          
        });
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
            <Button basic color='red' onClick={() => {
                            eliminarFavo(props.id);
                            props.onComplete();
                          }}>
              ELIMINAR DE FAVORITOS
            </Button>
          </div>
        </Card.Content>
      </Card> 
  )
}

export default Cartas