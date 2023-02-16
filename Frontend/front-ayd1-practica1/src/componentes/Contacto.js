import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Contacto() {
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
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>12345</td>
                  <td>kca@mail.com</td>
                  <td>
                    <Button variant="info">Actualizar</Button>
                    <Button variant="danger" style={{ margin: "1%" }}>
                      Eliminar
                    </Button>
                    <Button variant="warning">Favorito</Button>
                    <Button variant="success" style={{ marginLeft: "1%" }}>
                      Enviar email
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;
