import React from 'react'
import styles from './ImageContainer.module.css'

const ImageItem = (props) => {
    return (
        <div className={styles.photo__item_container}>
            <div className={styles.image}><img src={props.url} alt={"img"}/></div>
            <div className={styles.desc}>{props.title}</div>
        </div>
    )
};

export default ImageItem