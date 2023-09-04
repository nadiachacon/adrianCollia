
import { Container, Row } from 'react-bootstrap';
import img2 from '../assets/img/img2.jpeg'

function Nosotros(prop) {
    return ( 
    
    <Container fluid="sm,md,lg">
        <Row>
    <div id='nosotros'  >
            <div className='d-flex'>
                <div>
                <ul id='lista1' >
                    <li className='lista1'>Médico Pediatra</li>
                    <li className='lista1'>Cardiólogo infantil</li>
                    <li className='lista1'>Docente adscrito a la universidad de Buenos Aires</li>
                    <li className='lista1'>Médico egresado de la universidad de buenos aires 1995</li>
                    <li className='lista1'>Médico pediatra cardiólogo infantil Sanatorio Mater Dei</li>
                  
                </ul>
                </div>
                <div>
                <img className='imgnosotros img-fluid' src={img2} alt="consultorio"/>
                </div>
                </div>
            </div>
            </Row>
            </Container>
            
            
             );
            
}

export default Nosotros;