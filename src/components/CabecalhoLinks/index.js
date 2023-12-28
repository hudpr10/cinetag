import styles from './CabecalhoLinks.module.css'
import { Link } from 'react-router-dom';

const CabecalhoLinks = ({ children, url }) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLinks