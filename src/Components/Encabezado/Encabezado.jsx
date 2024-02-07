import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Encabezado() {
    return (
        <>

            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Reportes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/ventas">Ventas</Nav.Link>
                        <Nav.Link href="/entregas">Entregas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Encabezado;