export const obtenerGifts = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=5&api_key=4bEFTSMLbl3oCVoO0Of5cPABUXnprveX`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const imagenes = data.map(img => {
        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title,
        }
    });
    
    return imagenes;
}
