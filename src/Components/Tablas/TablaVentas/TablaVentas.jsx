import { Table, Modal, Button, Form } from 'react-bootstrap';
import { useContext, useState } from "react";
import { ContextoVentas } from '../../Context/VentasContext';

const TablaVentas = () => {

    const { ventas, registrarVenta } = useContext(ContextoVentas);
    const [showModal, setShowModal] = useState(false);
    const [nuevaVenta, setNuevaVenta] = useState({
        id: "",
        importe: "",
        letra: "",
        prefijo: "",
        numero: ""
    });

    const handleModalClose = () => {
        setShowModal(false);
        setNuevaVenta({
            id: "",
            importe: "",
            letra: "",
            prefijo: "",
            numero: ""
        });
    };

    const handleModalShow = () => setShowModal(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevaVenta({ ...nuevaVenta, [name]: value });
    };

    const handleAgregarVenta = () => {
        registrarVenta(nuevaVenta);
        handleModalClose();
    };

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Importe</th>
                        <th>Letra</th>
                        <th>Prefijo</th>
                        <th>Numero</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) =>
                        <tr key={venta._id}>
                            <td data-label="ID">{venta.id}</td>
                            <td data-label="Importe">{venta.importe}</td>
                            <td data-label="Letra">{venta.letra}</td>
                            <td data-label="Prefijo">{venta.prefijo}</td>
                            <td data-label="Numero">{venta.numero}</td>

                        </tr>
                    )}
                </tbody>
            </Table>

            <Button onClick={handleModalShow}>Agregar Venta</Button>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" name="id" value={nuevaVenta.id} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="importe">
                            <Form.Label>Importe</Form.Label>
                            <Form.Control type="text" name="importe" value={nuevaVenta.importe} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="letra">
                            <Form.Label>Letra</Form.Label>
                            <Form.Control type="text" name="letra" value={nuevaVenta.letra} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="prefijo">
                            <Form.Label>Prefijo</Form.Label>
                            <Form.Control type="text" name="prefijo" value={nuevaVenta.prefijo} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="numero">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" name="numero" value={nuevaVenta.numero} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleAgregarVenta}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default TablaVentas;