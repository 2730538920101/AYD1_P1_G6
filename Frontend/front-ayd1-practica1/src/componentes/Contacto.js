import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function Contacto() {
  const url = "http://localhost:5000/";
  const [data, setData] = useState([]);
  const contactos = data.map(([id, nombre, apellido, telefono, correo]) => ({
    id,
    nombre,
    apellido,
    telefono,
    correo,
  }));

  async function verContactos() {
    await fetch(`${url}showContacts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.respuesta);
        setData(data.respuesta);
      });
  }

  useEffect(() => {
    verContactos();
  }, []);

  return (
    <div>
      <br></br>
      <h1>Listado de Contacto</h1>
      <Container fluid>
        <Row>
          <Col>
            <br></br>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {contactos.map((contacto) => {
                  return (
                    <tr key={contacto.id}>
                      <td>{contacto.nombre}</td>
                      <td>{contacto.apellido}</td>
                      <td>{contacto.telefono}</td>
                      <td>{contacto.telefono}</td>
                      <td>
                        <Button variant="info" onClick={() => {}}>
                          Actualizar
                        </Button>
                        <Button variant="danger" style={{ margin: "1%" }}>
                          Eliminar
                        </Button>
                        <Button variant="warning">Favorito</Button>
                        <Button variant="success" style={{ marginLeft: "1%" }}>
                          Enviar email
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;
