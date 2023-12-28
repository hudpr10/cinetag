import { createContext, useContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [listaVideos, setListaVideos] = useState([])
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/hudpr10/cinetag-api/videos')
            .then(respostas => respostas.json())
            .then(dados => setListaVideos(dados))
    }, [])

    const listaVideosFavoritos = listaVideos.filter(cadaVideo => cadaVideo.favorito === true)

    return (
        <FavoritosContext.Provider
            value={{ listaVideos, setListaVideos, listaVideosFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { setListaVideos } = useContext(FavoritosContext)

    function mudandoFavorito(idClicado, favorito) {
        setListaVideos(listaAntiga => listaAntiga.map(cadaItem => {
            if (cadaItem.id === parseInt(idClicado)) {
                return {
                    ...cadaItem,
                    favorito: !favorito
                }
            }
            return cadaItem
        }))
    }

    return {
        mudandoFavorito
    }
}

/*

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritoContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista)
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}

*/