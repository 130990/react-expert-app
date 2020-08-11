import { shallow } from 'enzyme';
import {GiftGridItem} from '../components/GiftGridItem'
import React from 'react';
import '@testing-library/jest-dom'

describe('Prueba de validacion de componente', () => {
    const titulo ='Prueba'
    const url ='https://PruebaURL'
    const ResultadoObtenido = shallow(<GiftGridItem title={titulo} url={url} />);

    test('Debe de validar correcta ejecucion del componente', () => {
        expect(ResultadoObtenido).toMatchSnapshot();
    })
    
    test('Debe de tener un parrafo con el title', () => {
        const parrafo = ResultadoObtenido.find('p').text().trim();
        expect(parrafo).toBe(titulo);
    })
    
    test('Debe de devolver una img con src y con alt', () => {
        const img = ResultadoObtenido.find('img');
        const src = img.prop('src');
        //console.log(img.prop('src'))
        expect(src).toBe(url);
    })

    test('Debe de tener la clase fadeIn', () => {
        const div = ResultadoObtenido.find('div');
        expect(div.prop('className').includes('animate__')).toBe(true);
    })
    
    
})
