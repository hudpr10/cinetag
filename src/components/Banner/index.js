import styles from './Banner.module.css';

const Banner = ({ banner }) => {
    return (
        <div 
            className={styles.capa} 
            style={{ backgroundImage: `url('/imagens/banner-${banner}.png')` }}
        >
        </div>
    )
}

export default Banner;
