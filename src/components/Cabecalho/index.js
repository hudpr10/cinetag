import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import CabecalhoLinks from '../CabecalhoLinks'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <img src={logo} alt='Logo da cinetag' />
            </Link>
            <nav>
                <CabecalhoLinks url="/" >Home</CabecalhoLinks>
                <CabecalhoLinks url="/favoritos" >Favoritos</CabecalhoLinks>
            </nav>
        </header>
    )
}

export default Cabecalho