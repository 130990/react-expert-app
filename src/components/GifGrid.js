import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs'
import { GiftGridItem } from './GiftGridItem'

export const GifGrid = ({ categoria }) => {

    const { data: imagenes, loading } = useFecthGifs(categoria);


    return (
        <>
            <h3>{categoria}</h3>
            {loading &&<p className='animate__animated animate__flash'>Cargando imagenes...</p> }
            <div className="card-grid" >
                {
                    imagenes.map((img) => (
                        <GiftGridItem key={img.id} {...img} /> //enviando las imagenes con el spread, permite enviar las propiedades como un solo objeto, q puede desestructurase del otro lado
                    ))
                }
            </div>
        </>
    )
}
