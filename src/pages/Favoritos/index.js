import Banner from '../../components/Banner';
import styles from './Favoritos.module.css';
import Titulo from './../../components/Titulo/index';
import Card from './../../components/Card/index';
import { useContext } from 'react';
import { FavoritosContext } from '../../contextos/Favoritos';

const Favoritos = () => {
    const { listaVideosFavoritos } = useContext(FavoritosContext)

    return (
        <>
            <Banner banner="favoritos" />
            <Titulo>
                <h1>
                    Meus Favoritos
                </h1>
            </Titulo>
            <section className={styles.CardContainer}>
                {listaVideosFavoritos.length === 0 ?
                    <Titulo>
                        <h2>
                            Ainda não foi adicionado nenhum vídeo aos favoritos!
                        </h2>
                    </Titulo>

                    : listaVideosFavoritos.map(video => <Card {...video} key={video.id} />)
                }
            </section>
        </>
    )
}

export default Favoritos;
