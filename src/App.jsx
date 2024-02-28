import { useState } from "react";

import Cards from "./components/Cards";


function App() {
  
  const [usuario, setUsuario] = useState({
      nombre: '',
      fechaNacimiento: ''
  })
  const [err, setErr] = useState(false)
  const [show, setShow] = useState(false)
  
  
  const handleSubmit = (e) =>{
      e.preventDefault()
      if(usuario.fechaNacimiento.length < 4){
        setErr(true)
        
      }else{
        setErr(false)
        setShow(true)
      }
  
      
    }

  return (
<>
    <div className="App">
      <h1>Ingresa tu fecha de Nacimiento</h1>
      <form onSubmit={handleSubmit}>
        <label >Nombre de usuario:</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })} />
        <label >Edad: </label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, fechaNacimiento: e.target.value })}/>
        <button type="submit" >Enviar</button>
    </form>
   {err &&  <p>Coloque la informacion correctamente</p> }
    </div>
   {setShow && <Cards nombre={usuario.nombre} fechaNacimiento={usuario.fechaNacimiento} />}

</>
  );

}

export default App;
