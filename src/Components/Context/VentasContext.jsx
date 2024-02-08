import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoVentas = createContext();

const VentasContext = ({ children }) => {
  const [ventas, setVentas] = useState([]);

  //GET

  const obtenerVentas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/ventas");
      setVentas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerVentas();
  }, []);

  //POST

  const registrarVenta = async (venta) => {
    try {
      await axios.post("http://localhost:8080/api/venta", venta);

      setVentas([...ventas, venta])

    } catch (error) {
      console.log(error)
    }
  };

  //PUT

  const modificarVenta = async (venta) => {
    try {
      await axios.put(`http://localhost:8080/api/venta/${venta._id}`, venta);
      await obtenerVentas();
    } catch (error) {
      console.log(error)
    }
  };

  //DELETE

  const eliminarVenta = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/venta/${id}`);
      const eliminarVenta = ventas.filter((venta) => venta.id !== id);
      setVentas(eliminarVenta)
      await obtenerVentas();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <ContextoVentas.Provider value={{ obtenerVentas, registrarVenta, modificarVenta, eliminarVenta, ventas, setVentas }}>
        {children}
      </ContextoVentas.Provider>
    </>
  );
};

export default VentasContext;