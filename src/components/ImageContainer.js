import React, {useEffect} from "react";
import ImageItem from "./ImageItem";
import styles from './ImageContainer.module.css'

const ImagesContainer = (props) => {
    let photoArr = props.data.data.filter(el => {
        return el.id <= 20
    }).map(elem => {
        return <ImageItem title={elem.title} url={elem.url} key={elem.id}/>
    });

    useEffect(() => {
        props.handleSetDataLength(photoArr.length)
    }, [props, photoArr.length]);

    return (
        <div className={styles.image__wrapper}>
            {photoArr}
        </div>
    )
};

export default ImagesContainer