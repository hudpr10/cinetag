import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from './../../components/Titulo/index';
import styles from './Player.module.css';
import { useContext } from 'react';
import { FavoritosContext } from '../../contextos/Favoritos';
import NaoEncontrada from './../NaoEncontrada/index';

const Player = () => {
    const parametros = useParams();
    const { listaVideos } = useContext(FavoritosContext)

    const video = listaVideos.find((cadaVideo) => {
        return cadaVideo.id === parseInt(parametros.id)
    })

    return (
        <>
            {video ?
                <>
                    <Banner banner="player" />
                    <Titulo>
                        <h1>
                            Player
                        </h1>
                    </Titulo>
                    <section className={styles.container}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={video.link}
                            title={video.titulo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
                            allowFullScreen>
                        </iframe>
                    </section>
                </>
                :
                <NaoEncontrada />
            }
        </>
    )
}

export default Player;