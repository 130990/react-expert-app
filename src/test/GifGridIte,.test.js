import { shallow } from 'enzyme';
import {GiftGridItem} from '../components/GiftGridItem'
import React from 'react';
import '@testing-library/jest-dom'

describe('Prueba de validacion de componente', () => {
    test('Debe de validar correcta ejecucion del componente', () => {
        const ResultadoObtenido = shallow(<GiftGridItem title={'prueba'} url={''} />);
        expect(ResultadoObtenido).toMatchSnapshot();
    })
    
    
})
