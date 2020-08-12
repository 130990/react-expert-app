import React from 'react';
import { shallow } from 'enzyme';
import { AgregarCategoria } from '../components/AgregarCategoria'
import '@testing-library/jest-dom'


describe('Pruebas del componente AgregarCategoria', () => {
    const setCategorias = jest.fn();
    let ResultadoObtenido = shallow(< AgregarCategoria setCategorias={setCategorias} />)

    beforeEach(() => {
        ResultadoObtenido = shallow(< AgregarCategoria setCategorias={setCategorias} />)
    })

    test('Debe de mostrarse correctamente ', () => {
        expect(ResultadoObtenido).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto ', () => {
        const input = ResultadoObtenido.find('input');
        const valor = 'Prueva texto';
        input.simulate('change', { target: { value: valor } })
    })

    test('NO Debe de simular el "submit" del formulario', () => {
        const input = ResultadoObtenido.find('form');
        input.simulate('submit', { preventDefault() { } }) // esto preventDefault(){} es igual a preventDefault: () =>{}

        expect(setCategorias).not.toHaveBeenCalled();
    })

    test('Debe de llamar al setCategorias y limpiar la caja de texto', () => {
        const valor = 'Prueva texto';
        ResultadoObtenido.find('input').simulate('change', { target: { value: valor } });
        ResultadoObtenido.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategorias).toHaveBeenCalled();
        expect(ResultadoObtenido.find('input').prop('value')).toBe('');




    })



})
