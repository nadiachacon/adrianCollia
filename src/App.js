
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav2 from './componentes/Nav2';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import Ubicacion from './componentes/Ubicacion';
import BasicExample from './componentes/Turnos';
import { Container } from 'react-bootstrap';
import Turnos from './componentes/Turnos';



function App() {
  return (   
    
<Container>
  <Nav2 titulo='Dr. Adrian Collia'/> 
  <Inicio/>  
  <Nosotros/>
  <Turnos/>
  <Contacto/>
  <Ubicacion/>
  
  </Container>
    
  );
}

export default App;
