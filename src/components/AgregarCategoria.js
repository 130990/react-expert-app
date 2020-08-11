import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AgregarCategoria = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');
    const handleCambiarInput = (e) => {        
        setInputValue(e.target.value)
    }
    const handlEnviar = (e) => {
        e.preventDefault();
        console.log('Llamado Submit......');
        if (inputValue.length > 2) {
            setCategorias(cate => [inputValue,...cate])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handlEnviar}>
            <input type="text" value={inputValue} onChange={handleCambiarInput} />
        </form>
    )
}

AgregarCategoria.propTypes ={
    setCategorias: PropTypes.func.isRequired
}
