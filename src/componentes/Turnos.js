import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import imgcal from '../assets/img/imgcal.jpeg'
import imgt from '../assets/img/imgt.jpeg'
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap"


function Turnos() {
  return (

<Card className="turno"> 
    <Row>       
      <Col>
      {/* <h1>Pedí tú turno</h1> */}
      <Card.Img id="imgcal"  src={imgcal} />      
      </Col>
      <Col>
      <Card.Body>      
        
        <Card.Img id="imgt"  src={imgt} />
        <Card.Text id="turnos">
          Desde ahora y desde donde quiera que estés; podrás tener tú <span id="resaltar">consulta virtual</span> , con tan sólo un click; y recordá que si vives en Argentina también podrás hacer tú <span id="resaltar">consulta presencial</span>
        </Card.Text>
        <Button className="btn btn-success boton turno btn2">
        <a id="turno" href="https://secure.iturnos.com/www.dradriancollia.com.ar/iturnos/agendas.php?id_agenda"> Turnos</a>
        </Button>
      </Card.Body>
      </Col>
    </Row>
</Card>
  );
}

export default Turnos;

