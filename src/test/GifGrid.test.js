import React from 'react'
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid'
import '@testing-library/jest-dom'
import { useFecthGifs } from '../hooks/useFecthGifs';
jest.mock('../hooks/useFecthGifs');

describe('Pruebas de GifGrid', () => {
    test('Debe de ejecutar bien el componente <GifGrid /> ', () => {
        const categoria = 'Goku';
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const ResultadoObtenido = shallow(<GifGrid categoria={categoria} />)
        expect(ResultadoObtenido).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes del useFecthGifs', () => {
        const gifs =[{
            url:'https:///pruebab/a.png',
            title: 'Prueba',
            id: 123
        }];
        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const categoria = 'Goku';
        const ResultadoObtenido = shallow(<GifGrid categoria={categoria} />)
        //expect(ResultadoObtenido).toMatchSnapshot();
        expect(ResultadoObtenido.find('p').exists()).toBe(false);
        expect(ResultadoObtenido.find('GiftGridItem').length).toBe(gifs.length);
    })


})
