import React, { useState } from 'react'

const Form = () => {
    const [search, setSearch] =useState('')

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    if(search === 'pikachu') setSearch('Capturado')
  return (
    <>
    <h1>Formularios Controlados</h1>
    <hr />
    <form>
        <input 
            type="text" 
            name='search' 
            autoComplete='off' 
            onChange={handleInputChange}
            value={search}/>

        <button type='submit'>Buscar</button>
        <p>Busqueda Pokemon: {search}</p>
    </form>
    </>
  )
}

export default Form
