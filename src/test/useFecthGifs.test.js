import { useFecthGifs }from '../hooks/useFecthGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas sobre useFecthGifs', () => {
    test('Debe retornar estado inicial', async() => {
        const categoria = 'Prueba ';        
        const {result, waitForNextUpdate} = renderHook(() => useFecthGifs(categoria)); // probar un hook personalizado
        const {data ,loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('Debe de cargar un arreglo de imagenes y el loading en false', async() => {
        const categoria = 'Prueba ';        
        const {result, waitForNextUpdate} = renderHook(() => useFecthGifs(categoria)); // probar un hook personalizado
        await waitForNextUpdate();
        
        const {data ,loading} = result.current;
        
        expect(data.length).toBe(data.length);
        expect(loading).toBe(false);
        
    })
    
})
