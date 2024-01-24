import { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
        const mouseEvent = () => {
            console.log('componente Montado')
        }

        window.addEventListener('mousemove', mouseEvent)
       
    // Importante limpiar el estado para que no se sobre carge la RAM
       return () => {
        window.removeEventListener('mousemove', mouseEvent)
       }
    }, [])
    
  return (
    <div>
      <h1>Mensaje</h1>
    </div>
  )
}

export default Message
