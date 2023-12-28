import styles from './Card.module.css';
import favoritoCheio from './favorite-full.png'
import favoritoVazio from './favorite-outline.png'
import { useFavoritoContext } from '../../contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa, favorito=false }) => {
    const { mudandoFavorito } = useFavoritoContext()

    return (
        <div className={styles.container}>
            <Link to={`/video/${id}`}>
                <img 
                    src={capa} 
                    alt={`Capa do filme ${titulo}`} 
                    className={styles.capa} 
                />
            </Link>
            <div>
                <Link to={`/video/${id}`} className={styles.tituloVideoLink}> 
                    <h2 className={styles.tituloVideo}>{titulo}</h2>
                </Link>
                <img
                    id={id}
                    src={favorito ? favoritoCheio : favoritoVazio} 
                    alt="Favoritar Filme"
                    className={styles.coracao}
                    onClick={(e) => mudandoFavorito(e.target.id, favorito)}
                />
            </div>
        </div>
    )
}

export default Card;