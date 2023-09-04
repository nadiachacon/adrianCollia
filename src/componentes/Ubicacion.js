import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from "react-bootstrap";


function Ubicacion() {
    return ( <>

<Container fluid="sm,md,lg"  >
    <Row >

<div className="containers container-fluid  d-flex justify-content-center align-items-center ubc"   >

    
        <h2 id="ubicacion" >Ubicación:</h2>
        <div className="iconos"> 
        <FontAwesomeIcon  icon={faLocationDot} />
        <a id="letra" href="https://goo.gl/maps/WxuZBm3VUDaxqNCi9" title="ubicación iconos"> Junin 1384 PB y Peña
CABA</a>
   
    </div>
   

  
   
</div>
</Row>
</Container>
    
    </> );
}

export default Ubicacion;