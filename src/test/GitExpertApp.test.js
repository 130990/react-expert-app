import React from 'react'
import '@testing-library/jest-dom'
//import  { shallow } from 'enzyme'
import { GitExpertApp } from '../GitExpertApp'
import { shallow } from 'enzyme'

describe('Prueba de componente GitExpertApp', () => {
    test('Debe de inicializarce bien el componente <GitExpertApp />', () => {
        console.log(typeof GitExpertApp);
        //const ResultadoObtenido = shallow(<GitExpertApp />);
        //expect(ResultadoObtenido).toMatchSnapshot();
    })


})
