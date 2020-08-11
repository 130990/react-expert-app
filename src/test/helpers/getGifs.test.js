import { obtenerGifts } from '../../helpers/getGifs';
import '@testing-library/dom';

describe('Pruebas del archivo getGifs.js',() => {
    test('Debe de evaluar la cantidad de elementos del api ', async() => {
        const imgs = await obtenerGifts('roshi');
        expect(imgs.length).toBe(5);
    })

    test('Debe de evaluar la cantidad de elementos sin categoria ', async() => {
        const imgs = await obtenerGifts('');
        expect(imgs.length).toBe(0);
    })


})
