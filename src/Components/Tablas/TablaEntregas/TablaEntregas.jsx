import { Table, Modal, Button, Form } from 'react-bootstrap';
import { useContext, useState } from "react";
import { ContextoEntregas } from '../../Context/EntregasContext';

const TablaEntregas = () => {

  const { entregas, registrarEntrega } = useContext(ContextoEntregas);
  const [showModal, setShowModal] = useState(false);
  const [nuevaEntrega, setNuevaEntrega] = useState({
    id: "",
    fecha: "",
    sucursal: "",
    estado: "",
    numeroComprobante: ""
  });

  const handleModalClose = () => {
    setShowModal(false);
    setNuevaEntrega({
      id: "",
      fecha: "",
      sucursal: "",
      estado: "",
      numeroComprobante: ""
    });
  };


  const handleModalShow = () => setShowModal(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaEntrega({ ...nuevaEntrega, [name]: value });
  };

  const handleAgregarEntrega = () => {
    registrarEntrega(nuevaEntrega);
    handleModalClose();
  };

  return (

    <>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Sucursal</th>
            <th>Estado</th>
            <th>Número de comprobante</th>
          </tr>
        </thead>
        <tbody>
          {entregas.map((entrega) =>
            <tr key={entrega._id}>
              <td data-label="ID">{entrega.id}</td>
              <td data-label="Fecha">{entrega.fecha}</td>
              <td data-label="Sucursal">{entrega.sucursal}</td>
              <td data-label="Estado">{entrega.estado}</td>
              <td data-label="Numero Comprobante">{entrega.numeroComprobante}</td>

            </tr>
          )}
        </tbody>
      </Table>

      <Button onClick={handleModalShow}>Agregar Entrega</Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Entrega</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="id">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" name="id" value={nuevaEntrega.id} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="text" name="fecha" value={nuevaEntrega.fecha} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="sucursal">
              <Form.Label>Sucursal</Form.Label>
              <Form.Control type="text" name="sucursal" value={nuevaEntrega.sucursal} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="estado">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" name="estado" value={nuevaEntrega.estado} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="numeroComprobante">
              <Form.Label>Numero de comprobante</Form.Label>
              <Form.Control type="text" name="numeroComprobante" value={nuevaEntrega.numeroComprobante} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAgregarEntrega}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default TablaEntregas;