import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NuevoContacto from "./NuevoContacto";

function Contacto() {
  const url = "http://localhost:5000/";
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const contactos = data.map(
    ([id, nombre, apellido, telefono, correo, isFavorito]) => ({
      id,
      nombre,
      apellido,
      telefono,
      correo,
      isFavorito,
    })
  );

  async function verContactos() {
    console.log("ejecutando contactos");
    await fetch(`${url}showContacts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.respuesta);
        setData(data.respuesta);
      });
  }

  async function eliminarContacto(id) {
    let requestDelete = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    await fetch(`${url}deleteContact/${id}`, requestDelete)
      .then((response) => response.json())
      .then((data) => {
        verContactos();
      });
  }

  async function addFavoritos(id) {
    let requestPost = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_contacto: id }),
    };
    await fetch(`${url}addFavorite`, requestPost)
      .then((response) => response.json())
      .then((data) => {
        verContactos();
      });
  }

  useEffect(() => {
    verContactos();
  }, [showModal]);

  const handleOnSubmit = async (contactValue) => {
    console.log(contactValue);
    await fetch(`${url}updateContact/${selectedContact.id}`, {
      method: "PUT",
      body: JSON.stringify(contactValue),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setShowModal(false);
  };

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
                      <td>{contacto.correo}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => {
                            setSelectedContact(contacto);
                            setShowModal(true);
                          }}
                        >
                          Actualizar
                        </Button>
                        <Button
                          variant="danger"
                          style={{ margin: "1%" }}
                          onClick={() => {
                            eliminarContacto(contacto.id);
                          }}
                        >
                          Eliminar
                        </Button>
                        {contacto.isFavorito === 0 ? (
                          <Button
                            variant="warning"
                            onClick={() => {
                              addFavoritos(contacto.id);
                            }}
                          >
                            Favorito
                          </Button>
                        ) : (
                          "Ya es favorito"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Información del Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NuevoContacto
            contacto={selectedContact}
            handleOnSubmit={handleOnSubmit}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Contacto;
