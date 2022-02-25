import './Form.css'
import { useState } from 'react';

const Form = () => {
  const [option, setOption] = useState(false)

  return(
    <div className='Form-login'>
      <h1>Iniciar secion</h1>

      <form action="">
        {option 
        && 
        <>
        <label>Nombre</label>
        <input type="text" placeholder='Ingrese su nombre'></input>
        </>
        }
        <label >Email</label>
        <input type="text" placeholder='Ingrese su email'></input>
        <label >Contraceña</label>
        <input type="text" placeholder='Ingrese su contaceña'></input>
        {option 
        && 
        <>
        <label>Confirmar contraceña</label>
        <input type="text" placeholder='Ingrese nuevamente su contraseña'></input>
        </>
        }
      </form>

      <button>Iniciar secion</button>

      <p >Eres un nuevo usuario? <span onClick={()=> setOption(!option)}>Crear Cuenta</span></p>
    </div>
  )
}

export default Form;
