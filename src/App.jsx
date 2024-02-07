import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from './Paginas/PaginaPrincipal/PaginaPrincipal'
import { ContextoVentas } from './Components/Context/VentasContext';
import Rutas from './Components/Rutas/Rutas';

const App = () => {

  return (
    <>
      <ContextoVentas>

        <PaginaPrincipal />
        <Rutas />

      </ContextoVentas>
    </>
  );
};

export default App