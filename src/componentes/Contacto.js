
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import img3 from '../assets/img/img31.jpeg'
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import { Container, Row } from "react-bootstrap";

const initialForm={
    nombre:"",
    email:"",
    comments:"",

};

const validationsForm=(form)=>{
    let errors={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    


if(!form.nombre.trim()){
    errors.nombre="El campo 'Nombre' es requerido";    
} else if(!regexName.test(form.nombre.trim())) {
    errors.nombre="El campo 'Nombre' sólo acepta letras y espacios en blanco"; 
}

if(!form.email.trim()){
    errors.email="El campo 'Correo Electronico' es requerido";    
}else if(!regexEmail.test(form.email.trim())) {
    errors.email="El campo 'Email' es incorrecto"; 
}

if(!form.comments.trim()){
    errors.comments="El campo 'Mensaje' es requerido";    
}

return errors;
};

let styles={
    
    color:"#dc3545",
}

const Contacto=()=>{
   const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
   }=useForm(initialForm,validationsForm);

   return(
    <>
    <Container fluid="sm,md,lg">
        <Row>
 <div id="contenedorcontacto" className="container-fluid d-flex">
        <div className="fondoform">       

                    
        <form  onSubmit={handleSubmit}>
           
            <div className=" formulario container-fluid" >
            <label htmlfor="nombre" className="form-label">Nombre:</label>
            <input 
            type="text"
            className="form-control"  
            id="nombre" 
            name="nombre" 
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            value={form.nombre}
            onChange={handleChange}
            required
            />
            {errors.nombre && <p style={styles} >{errors.nombre}</p>}


            </div>

            <div className="mb-3 formulario container-fluid ">
            <label htmlfor="email" className="form-label">Correo Electrónico:</label>
            <input 
            type="email" 
            className="form-control" 
            id="email"
            name="email"  
            placeholder="nombre@mail.com"
            onBlur={handleBlur}           
            value={form.email}
            onChange={handleChange}
            required
            />
             {errors.email && <p style={styles} >{errors.email}</p>}
            </div>

            <div className="mb-3 formulario container-fluid">
            <label for="textarea" className="form-label">Mensaje:</label>
            <textarea className="form-control" 
            
            rows="3"
            id="textarea"
            name="comments"
            placeholder="Escribe tus consultas"
            onBlur={handleBlur}           
            value={form.comments}
            onChange={handleChange}
            required
             ></textarea>
             {errors.comments && <p style={styles} >{errors.comments}</p>}
            </div>

            <div className="mb-3 formulario boton container-fluid ">
            <input type="submit" className="btn btn-success boton" value="Enviar" />
            {loading && <Loader/>}
            {response && <Message msg="Los datos han sido enviados" />}
            </div>
        </form>
      

        
        </div>

        <div id="comunicate" >

        <h1 id="contacto">Contacto:</h1>
               
        
         <div className="iconos">
        <FontAwesomeIcon icon={faPhone} />        
        <a id="letra"  href="tel:1148074902"> Teléfono.:11 48074902</a>
        </div>
        <div className="iconos">
        <FontAwesomeIcon icon={faCalendarDays} />        
        <a  id="letra" href="https://secure.iturnos.com/www.dradriancollia.com.ar/iturnos/agendas.php?id_agenda"> Pedí tú turno</a>
        <div className='sobre container-fluid d-flex'>
        <img className="img-fluid" src={img3} alt="Ubicacion"/>
        </div>
        </div>


       
        </div>

    </div>
    </Row>
    </Container>
    </>
   )
}

export default Contacto;




