import img1 from '../assets/img/img1.png'
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap"



function Inicio() {
    return ( <  >
               <Container fluid="sm,md,lg">
                <Row>
                <div id='inicio' expand="lg">
                    <Col> <img id="imginicio" className='img-fluid' src={img1} alt="consultorio"/></Col>
                   <Col> <p className='titulo2 text-wrap '>Medico Pediatra  Cardiólogo Infantil</p></Col>
                    
                </div>
                </Row>
                </Container>
            
    </> );
}

export default Inicio;