import React, { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {
    const [categorias, setCategorias] = useState(['Samurai Jack']);
    // const handleAgregar=()=>{                      
    //     //setCategorias( [...categorias, 'Lufydono']); // usando operador spread
    //     setCategorias( cate =>[...categorias,'Lufydono']); // usando funcion callback
    // }
    return (
        <div>
            <h2>Git Exper tApp</h2>
            <AgregarCategoria setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(categoria => {
                        return (
                            <GifGrid key={categoria} categoria={categoria}></GifGrid>
                        );
                    })
                }
            </ol>
        </div>
    );
}

export default GitExpertApp;