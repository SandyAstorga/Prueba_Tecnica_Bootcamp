import { React, useEffect } from 'react';

const Message = () => {
    useEffect(() => {
        const handleMouseMove = () => {
            console.log('xD');
        }
        //   console.log('Aqui Estoy')
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            // console.log('Ya me fui')
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <>
            <h1>Me Renderice</h1>
        </>
    )
}

export default Message;
