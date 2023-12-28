import { Outlet } from "react-router-dom";
import FavoritosProvider from "../../contextos/Favoritos";
import Cabecalho from './../../components/Cabecalho/index';
import Rodape from './../../components/Rodape/index';

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase