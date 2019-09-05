import React from 'react'
import preloader from '../img/Preloader_7.gif'
import styles from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader_gif}>
            <img alt='preloader' src={preloader}/>
        </div>
    )
};

export default Preloader