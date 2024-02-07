import Table from 'react-bootstrap/Table';
import { useContext, useState } from "react";
import { ContextoVentas } from '../../Context/VentasContext';

const TablaVentas = () => {

    const { ventas } = useContext(ContextoVentas)
    return (
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
                {Ventas.map((venta) =>
                    <tr key={venta._id}>
                        <td></td>
                        <td data-label="ID">{venta.id}</td>
                        <td data-label="Importe">{venta.importe}</td>
                        <td data-label="Letra">{venta.letra}</td>
                        <td data-label="Prefijo">{venta.prefijo}</td>
                        <td data-label="Numero">{venta.numero}</td>

                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default TablaVentas;