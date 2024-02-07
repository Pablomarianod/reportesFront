import { Routes, Route, Navigate, resolvePath } from "react-router-dom";
import Ventas from "../../Paginas/Ventas/Ventas";
import PaginaPrincipal from "../../Paginas/PaginaPrincipal/PaginaPrincipal";
import Entregas from "../../Paginas/Entregas/Entregas";


const Rutas = () => {


    return (
        <Routes>

            <Route exact path="/" element={<PaginaPrincipal />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/entregas" element={<Entregas />} />

        </Routes>
    )
}

export default Rutas