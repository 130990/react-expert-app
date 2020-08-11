import { useState, useEffect } from 'react'
import { obtenerGifts } from '../helpers/getGifs';

export const useFecthGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        obtenerGifts(categoria).then(imgs => setState({
            data: imgs,
            loading: false
        }));
    },
        [categoria]
    ); // con la lista de dependensias vacias seria como el DidMount(), en react basado en clases
    //cuando s epasa la categoria por depencia, dispara a que se recargue solo en caso de q la categoria haya cargado

    return state;
}
