import "./PaginaPrincipal.css"
import { Button, ButtonGroup } from 'react-bootstrap';

const PaginaPrincipal = () => {
    return (
        <>
        <div className="contenedor">

            <h2 className="titulo">Seleccionar reporte:</h2>

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" href="/ventas">Ventas</Button>
                <Button variant="secondary" href="/ventas">Entregas</Button>
            </ButtonGroup>

        </div>

        </>
    );
};

export default PaginaPrincipal;