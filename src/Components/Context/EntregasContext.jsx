import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextoEntregas = createContext();

const EntregasContext = ({ children }) => {
  const [entregas, setEntregas] = useState([]);

  //GET

  const obtenerEntregas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/entregas");
      setEntregas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerEntregas();
  }, []);

  //POST

  const registrarEntrega = async (entrega) => {
    try {
      await axios.post("http://localhost:8080/api/entrega", entrega);

      setEntregas([...entregas, entrega])

    } catch (error) {
      console.log(error)
    }
  };

  //PUT

  const modificarEntrega = async (entrega) => {
    try {
      await axios.put(`http://localhost:8080/api/entrega/${entrega._id}`, entrega);
      await obtenerEntregas();
    } catch (error) {
      console.log(error)
    }
  };

  //DELETE

  const eliminarEntrega = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/entrega/${id}`);
      const eliminarEntrega = entregas.filter((entrega) => entrega.id !== id);
      setEntregas(eliminarEntrega)
      await obtenerEntregas();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <ContextoEntregas.Provider value={{ obtenerEntregas, registrarEntrega, modificarEntrega, eliminarEntrega, entregas, setEntregas }}>
        {children}
      </ContextoEntregas.Provider>
    </>
  );
};

export default EntregasContext;