import 'bootstrap/dist/css/bootstrap.min.css';

import Rutas from './Components/Rutas/Rutas';
import Encabezado from './Components/Encabezado/Encabezado';
import VentasContext from './Components/Context/VentasContext';
import EntregasContext from './Components/Context/EntregasContext';

const App = () => {

  return (
    <>
      <VentasContext>
        <EntregasContext>

        <Encabezado />
        <Rutas />
        
        </EntregasContext>
      </VentasContext>

    </>
  );
};

export default App