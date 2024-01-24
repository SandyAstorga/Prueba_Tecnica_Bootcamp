import { useState } from 'react'
import Message  from './Message';

const CleanEffect = () => {

    const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow((prev) => 
            !prev
        )
    }

  return (
    <div>
        <h1>Efecto</h1>
        <h3>Componente: {show ? 'Montado' : 'Desmontado'}</h3>
        {show && <Message/>}
        <button onClick={handleChange}>Cambio</button>
    </div>
  )
}

export default CleanEffect
