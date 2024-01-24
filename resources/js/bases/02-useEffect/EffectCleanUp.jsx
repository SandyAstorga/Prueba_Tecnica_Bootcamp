import {React, useState} from 'react'
import Message from './Message'

const EffectCleanUp = () => {
    const [showComponent, setShowComponent] = useState(false)

    const handleChangeFlag = () => {
        setShowComponent(prev => !prev)
    }

  return (
    <>
    <h1>Effect Clean Up</h1>
    <hr />

    <h3>
        Estado: {''}
        {showComponent === false
         ? 'Componente desmontado'
         : 'Componente Montado'}
    </h3>
    
    {showComponent && <Message />}

    <button onClick={handleChangeFlag}>{!showComponent ? 'Montado' : 'Desmontado'}</button>
    </>
  )
}

export default EffectCleanUp
