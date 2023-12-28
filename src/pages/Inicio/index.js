import { useContext } from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Titulo from '../../components/Titulo'
import styles from './Inicio.module.css'
import { FavoritosContext } from '../../contextos/Favoritos'

const Inicio = () => {
    const { listaVideos } = useContext(FavoritosContext)

    return (
        <>
            <Banner banner="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <section className={styles.videosContainer}>
                {listaVideos.map(cadaVideo => {
                    return <Card 
                        {...cadaVideo}
                        key={cadaVideo.id} 
                    />
                })}
            </section>
        </>
    )
}

export default Inicio;
