import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoVentas = createContext();

const VentasContext = ({ children }) => {
  const [ventas, setVentas] = useState([]);

  //GET

  const obtenerVentas = async () => {
    try {
      const response = await axios.get("https://huellitas-back-9sgs.onrender.com/api/ventas");
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
      await axios.post("https://huellitas-back-9sgs.onrender.com/api/venta", venta);

      setVentas([...ventas, venta])

    } catch (error) {
      console.log(error)
    }
  };

  //PUT

  const modificarVenta = async (venta) => {
    try {
      await axios.put(`https://huellitas-back-9sgs.onrender.com/api/venta/${venta._id}`, venta);
      await obtenerVentas();
    } catch (error) {
      console.log(error)
    }
  };

  //DELETE

  const eliminarVenta = async (id) => {
    try {
      await axios.delete(`https://huellitas-back-9sgs.onrender.com/api/venta/${id}`);
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